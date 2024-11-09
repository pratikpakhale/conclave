import { type SchemaTypeDefinition } from 'sanity';
import testimonial from './testimonial-schema';
import contactUs from './contactUs-schema';
import hrRegistration from './hrRegistration-schema';
import committee from './committee';
import facultyTestimonials from './facultyTestimonials';
import timeline from './timeline';
import attendes from './hr';
import linkedinPosts from './linkedinPosts';
import feedback from './feedback-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    feedback,
    facultyTestimonials,
    testimonial,
    committee,
    contactUs,
    hrRegistration,
    timeline,
    attendes,
    linkedinPosts,
  ],
};
