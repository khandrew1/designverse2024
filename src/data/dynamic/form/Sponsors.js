import { METADATA } from "@/data/Config";
import { phone } from "@/data/dynamic/form/Regex";

export const TIERS = {
  tier1: "Seed",
  tier2: "Sprout",
  tier3: "Plant",
  tier4: "Garden",
  tier5: "Forest",
  other: "Other",
};

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${METADATA.name}. Thank you for being on the organizing team, we appreciate your efforts to help support ${METADATA.name}.`,
      `${METADATA.name} is ${METADATA.description} On ${METADATA.date} over the course of ${METADATA.length}, you’ll be able to challenge your problem solving skills, create innovative prototypes, and engage with a panel of industry experts!`,
      "Supporting DesignVerse contributes significantly to the success of UCR's first annual Design-a-Thon, which ultimately advances our cause for design within the University of California, Riverside. This initiative directly benefits students across the university who have an interest in the field of web design, UI/UX, and design-like thinking. Your sponsorship not only strengthens this event but also provides valuable opportunities for designers, allowing both DesignVerse and Design at UCR to organize more impactful events in the future.      ",
      "Sponsors are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "123 456 7890",
    maxLength: 50,
    width: 12,
    required: true,
    regex: phone,
  },
  company: {
    input: "input",
    name: "company",
    type: "text",
    title: "Company Name",
    placeholder: "MLH",
    maxLength: 50,
    width: 12,
    required: true,
  },
  position: {
    input: "input",
    name: "position",
    type: "text",
    title: "Position",
    placeholder: "recruitment",
    maxLength: 50,
    width: 12,
    required: true,
  },
  tier: {
    input: "radio",
    text: "Sponsorship Tier (please check the sponsorship packet)",
    options: TIERS,
    field: "tier",
    width: 12,
    required: true,
  },
  response: {
    input: "textarea",
    name: "response",
    rows: 4,
    title: "Additional Comments/Questions",
    placeholder: "...",
    width: 12,
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
    options: [
      "I have read the DesignVerse Code of Conduct and agree to the terms and conditions listed",
      "I consent to photographs being taken and being used for future marketing purposes",
      "I consent to following the provided guidelines and rules instructed by the organizing team and understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
    ],
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  tier: "",
  requirements: [],
};
