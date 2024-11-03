const committee = {
  name: "committee",
  title: "Committee",
  type: "document",
  fields: [
    {
      name: "studentName",
      title: "Student Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Lead", value: "lead" },
          { title: "Co-Lead", value: "co-lead" },
          { title: "Member", value: "member" },
        ],
      },
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "string",
    },
    {
      name: "committeeName",
      title: "Committee Name",
      type: "string",
      options: {
        list: [
          {
            title: "Invitation, Media and Management Committee",
            value: "invitation_media_management",
          },
          {
            title: "Registration, Feedback and FollowUp Committee",
            value: "registration_feedback_followup",
          },
          { title: "Program and Agenda Committee", value: "program_agenda" },
          { title: "Stage and Memento Committee", value: "stage_memento" },
          { title: "Food Committee", value: "food" },
          {
            title: "Transportation and Hospitality Committee",
            value: "transportation_hospitality",
          },
          {
            title: "Sponsorship and Outreach Committee",
            value: "sponsorship_outreach",
          },
          {
            title: "Student Coordination and Volunteers Committee",
            value: "student_coordination_volunteers",
          },
          { title: "Social Media", value: "social_media" },
          { title: "Alumni Committee", value: "alumni" },
          { title: "EMCEE Team", value: "emcee" },
          { title: "Video Bytes Committee", value: "video_bytes" },
          { title: "Social Media Committee", value: "social_media_committee" },
        ],
      },
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
  ],
};

export default committee;
