const timeline = {
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    {
      title: 'Event Name',
      name: 'eventName',
      type: 'string',
    },
    {
      title: 'Sections',
      name: 'section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Heading1',
              name: 'heading1',
              type: 'string',
            },
            {
              title: 'Heading2',
              name: 'heading2',
              type: 'string',
            },
            {
              title: 'Time',
              name: 'time',
              type: 'string',
            },
            {
              title: 'Timeline Components',
              name: 'timelineComponents',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'time', type: 'string', title: 'Time' },
                    { name: 'heading', type: 'string', title: 'Heading' },
                    {
                      name: 'content',
                      type: 'array',
                      title: 'Content',
                      of: [{ type: 'string' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default timeline;
