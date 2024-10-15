'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { createTestimonial } from '../actions/createTestimonial';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg'
    >
      {pending ? (
        <span className='flex items-center justify-center'>
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>{' '}
          Submitting...
        </span>
      ) : (
        'Submit'
      )}
    </button>
  );
}

export default function TestimonialForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;
    const result = await createTestimonial(formData);
    if (result.success) {
      console.log('Testimonial created:', result.testimonial);
      toast('Testimonial Submitted ✅');

      router.push('/');
    } else {
      console.error('Error:', result.error);
      toast('Failed to send your testimonial');
    }
  }

  const [fileNames, setFileNames] = useState({
    photo: '',
    video: '',
  });

  const [isMounted, setIsMounted] = useState(false); // For controlling the animation

  useEffect(() => {
    // Trigger the animation on component mount
    setIsMounted(true);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const fileName = files[0].name;
      setFileNames(prev => ({ ...prev, [name]: fileName }));
    }
  };

  return (
    <div
      className={`p-4 relative min-h-screen flex items-center justify-center bg-[#0A0A0A] transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='absolute inset-0 bg-[#0A0A0A] opacity-50'></div>
      <div
        className={`relative bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-4xl text-white 
                             transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-20 scale-95 opacity-0'}`}
      >
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Testimonial Submission Form
        </h1>

        <form ref={formRef} action={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Form Fields */}
            <div>
              <label className='block mb-2' htmlFor='fullName'>
                Full Name:
              </label>
              <input
                type='text'
                id='fullName'
                name='name'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='contactNo'>
                Contact No:
              </label>
              <input
                type='text'
                id='contactNo'
                name='contactNo'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='email'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='graduationYear'>
                Graduation Year:
              </label>
              <input
                type='text'
                id='graduationYear'
                name='graduationYear'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='designation'>
                Designation:
              </label>
              <input
                type='text'
                id='designation'
                name='designation'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='course'>
                Course:
              </label>
              <input
                type='text'
                id='course'
                name='course'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='achievements'>
                Achievements:
              </label>
              <textarea
                id='achievements'
                name='achievements'
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='testimonial'>
                Testimonial:
              </label>
              <textarea
                id='testimonial'
                name='testimonial'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='memorableExperience'>
                Memorable Experience:
              </label>
              <textarea
                id='memorableExperience'
                name='memorableExperience'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
            <div>
              <label className='block mb-2' htmlFor='encouragement'>
                Encouragement:
              </label>
              <textarea
                id='encouragement'
                name='encouragement'
                required
                className='w-full p-2 rounded-lg bg-gray-700 text-gray-300'
              />
            </div>
          </div>

          {/* File Inputs */}
          <div className='space-y-6'>
            <div>
              <label className='block mb-2' htmlFor='photo'>
                Photo (Optional but Encouraged):
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='photo'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      className='w-8 h-8 mb-4 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 13.51 7H7a4 4 0 1 0 0 8h6z'
                      />
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 11v4m-2-2h4'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id='photo'
                    type='file'
                    name='photo'
                    onChange={handleFileChange}
                    className='hidden'
                  />
                </label>
              </div>
              {fileNames.photo && (
                <p className='mt-2 text-white'>
                  Uploaded Photo: {fileNames.photo}
                </p>
              )}
            </div>

            <div>
              <label className='block mb-2' htmlFor='video'>
                Video (Optional but Encouraged):
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='video'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      className='w-8 h-8 mb-4 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 10l4.447-2.224A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.553.895L15 14M15 10v4m0-4L11 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6m0-8v8'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-400'>
                      MP4, AVI (MAX. 100MB)
                    </p>
                  </div>
                  <input
                    id='video'
                    type='file'
                    name='video'
                    onChange={handleFileChange}
                    className='hidden'
                  />
                </label>
              </div>
              {fileNames.video && (
                <p className='mt-2 text-white'>
                  Uploaded Video: {fileNames.video}
                </p>
              )}
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='consent'
                name='consent'
                type='checkbox'
                required
                className='w-4 h-4 rounded border-gray-600 bg-gray-700'
              />
            </div>
            <label htmlFor='consent' className='ml-2 text-sm text-gray-300'>
              I consent to the use of my information for testimonial purposes.
            </label>
          </div>

          <div className='flex justify-center'>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
