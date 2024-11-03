/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function createTestimonial(formData: any) {
  try {
    let photoAsset, videoAsset;
    if (formData.get('photo')?.size > 0) {
      photoAsset = await client.assets.upload('image', formData.get('photo'));
    }
    if (formData.get('video')?.size > 0) {
      videoAsset = await client.assets.upload('file', formData.get('video'));
    }

    console.log(formData);

    const testimonial = await client.create({
      _type: 'testimonial',
      name: formData.get('name'),
      contactNo: formData.get('contactNo'),
      email: formData.get('email'),
      graduationYear: parseInt(formData.get('graduationYear')),
      designation: formData.get('designation'),
      course: formData.get('course'),
      achievements: formData.get('achievements'),
      testimonial: formData.get('testimonial'),
      memorableExperience: formData.get('memorableExperience'),
      encouragement: formData.get('encouragement'),
      photo: photoAsset
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: photoAsset._id },
          }
        : undefined,
      video: videoAsset
        ? {
            _type: 'file',
            asset: { _type: 'reference', _ref: videoAsset._id },
          }
        : undefined,
      consent: formData.get('consent') === 'on',
      approved: false,
    });

    return { success: true, testimonial };
  } catch (error: any) {
    console.error('Error creating testimonial:', error);
    return { success: false, error: error.message };
  }
}

export async function getTestimonials() {
  try {
    const testimonials =
      await client.fetch(`*[_type == "testimonial" && approved == true]{
      _id,
      name,
      contactNo,
      email,
      graduationYear,
      designation,
      course,
      achievements,
      testimonial,
      memorableExperience,
      encouragement,
      "photoUrl": photo.asset->url,
      "videoUrl": video.asset->url
    }`);

    return { success: true, testimonials };
  } catch (error: any) {
    console.error('Error fetching testimonials:', error);
    return { success: false, error: error.message };
  }
}

export async function getOneTestimonial(_id: string) {
  try {
    const testimonial =
      await client.fetch(`*[_type == "testimonial" && _id == "${_id}"]{
      _id,
      name,
      contactNo,
      email,
      graduationYear,
      designation,
      course,
      achievements,
      testimonial,
      memorableExperience,
      encouragement,
      "photoUrl": photo.asset->url,
      "videoUrl": video.asset->url
    }`);

    return { success: true, testimonial };
  } catch (error: any) {
    console.error('Error fetching testimonials:', error);
    return { success: false, error: error.message };
  }
}
