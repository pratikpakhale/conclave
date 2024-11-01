// export interface attendees {
//   title: string;
//   src: string;
//   company: string;
//   linkedin: string;
//   position: string;
//   color: string;
// }

export interface attendees {
  name: string;
  src?: string;
  company: string;
  position: string;
  linkedin: string;
  student1_name?: string;
  student1_phone?: string | null;
  student2_name?: string;
  student2_phone?: string | null;
}
