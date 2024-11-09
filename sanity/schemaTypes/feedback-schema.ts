// feedback-schema.ts
const feedback = {
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    {
      name: 'overallExperience',
      title: 'Overall Experience',
      type: 'number',
    },
    {
      name: 'expectations',
      title: 'Expectations Met',
      type: 'number',
    },
    {
      name: 'collaboration',
      title: 'Collaboration Interest',
      type: 'number',
    },
    {
      name: 'amenities',
      title: 'Amenities Rating',
      type: 'number',
    },
    {
      name: 'interaction',
      title: 'Interaction Rating',
      type: 'number',
    },
    {
      name: 'organization',
      title: 'Organization Rating',
      type: 'number',
    },
    {
      name: 'futureEngagement',
      title: 'Future Engagement',
      type: 'string',
    },
    {
      name: 'appreciatedAspects',
      title: 'Appreciated Aspects',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'positiveImpressions',
      title: 'Positive Impressions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'innovationApproach',
      title: 'Innovation Approach',
      type: 'string',
    },
    {
      name: 'beneficialPrograms',
      title: 'Beneficial Programs',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'recommendation',
      title: 'Recommendation',
      type: 'string',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    },
  ],
};

export default feedback;
