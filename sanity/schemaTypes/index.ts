import { type SchemaTypeDefinition } from "sanity";
import testimonial from "./testimonial-schema";
import contactUs from "./contactUs-schema";
import hrRegistration from "./hrRegistration-schema";
import committee from "./committee";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonial, committee, contactUs, hrRegistration],
};
