import { type SchemaTypeDefinition } from "sanity";
import testimonial from "./testimonial-schema";
import contactUs from "./contactUs-schema";
import hrRegistration from "./hrRegistration-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonial, contactUs, hrRegistration],
};
