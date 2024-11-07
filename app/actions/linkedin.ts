'use server';

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../../sanity/env';

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function getLinkedInPosts() {
  try {
    const posts = await client.fetch(`*[_type == "linkedinPosts"]{
      _id,
      title,
      uri
    }`);

    return { success: true, posts };
  } catch (error: any) {
    console.error('Error fetching LinkedIn posts:', error);
    return { success: false, error: error.message };
  }
}
