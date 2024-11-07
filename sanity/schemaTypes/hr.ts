const attendes = {
  name: 'attendees',
  title: 'Attendees',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Attendees', value: 'attendees' },
          { title: 'Chief Guest', value: 'cg' },
          { title: 'Guest of Honour', value: 'gh' },
        ],
      },
      default: 'attendees',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'text',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'string',
    },
    {
      name: 'studentName1',
      title: 'Student Name 1',
      type: 'string',
    },
    {
      name: 'studentName2',
      title: 'Student Name 2',
      type: 'string',
    },
    {
      name: 'studentContact1',
      title: 'Student Contact 1',
      type: 'string',
    },
    {
      name: 'studentContact2',
      title: 'Student Contact 2',
      type: 'string',
    },
    {
      name: 'studentLinkedIn1',
      title: 'Student LinkedIn 1',
      type: 'string',
    },
    {
      name: 'studentLinkedIn2',
      title: 'Student LinkedIn 2',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
  ],
};

export default attendes;
