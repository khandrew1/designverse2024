import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
  query,
  where,
  arrayRemove,
  deleteField,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { phone, major, age, school, grade, gender, shirt, diet, resume } =
    await req.json();

  try {
    await updateDoc(doc(db, "users", session.user.id), {
      phone: phone,
      major: major,
      age: age,
      school: school,
      grade: grade,
      gender: gender,
      shirt: shirt,
      "status.participants": "pending",
      diet: diet,
      resume: resume,
      role: arrayUnion("participants"),
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  const res = NextResponse;

  const { auth, message } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const output = [];

  try {
    const snapshot = await getDocs(
      query(
        collection(db, "users"),
        where("role", "array-contains", "participants")
      )
    );
    snapshot.forEach((doc) => {
      const {
        name,
        email,
        phone,
        major,
        age,
        school,
        grade,
        gender,
        shirt,
        status,
        diet,
        resume,
      } = doc.data();

      output.push({
        uid: doc.id,
        name,
        email,
        phone,
        major,
        age,
        school,
        grade,
        gender,
        shirt,
        diet,
        resume,
        status: status.participants,
        selected: false,
        hidden: false,
      });
    });
    return res.json({ message: "OK", items: output }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: "Internal Server Error", items: [] },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { objects, attribute, status } = await req.json();

  const { auth, message } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  try {
    objects.forEach(async (object) => {
      if (attribute === "role") {
        await updateDoc(doc(db, "users", object.uid), {
          role: arrayRemove("participants"),
          "status.participants": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "status.participants": status,
        });
      }
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
