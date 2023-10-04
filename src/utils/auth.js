import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const authenticate = async (restrictions = {}) => {
  const session = await getServerSession(authOptions);

  if (!session.user) {
    return { message: "Invalid Authentication Credentials.", auth: 401 };
  }

  const unauthorized = Object.entries(restrictions).some(
    ([key, value]) => session.user.roles[key] !== value
  );

  if (unauthorized) {
    return { message: `Forbidden Access`, auth: 403 };
  }

  return {
    message: null,
    auth: 200,
    uid: session.user.id,
    user: session.user,
  };
};
