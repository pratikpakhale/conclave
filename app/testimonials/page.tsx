'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { createTestimonial } from '../actions/testimonials';
import { useFormStatus } from 'react-dom';
import Navbar from '@/components/Navbar';
import { FaFileUpload } from 'react-icons/fa';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='bg-text-col hover:bg-white text-color1 w-full font-semibold py-2 px-4 rounded-lg'
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
  const [photo, setPhoto] = useState<File | null>(null);
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(formData: FormData) {
    if (!formRef.current) return;

    console.log(photo);

    if (!photo) {
      setError('Please add a Good Profile Picture.');
      return;
    }

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
    setError('');
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const fileName = files[0].name;
      setFileNames(prev => ({ ...prev, [name]: fileName }));
      setPhoto(files[0]);
    }
  };

  return (
    <div
      className={`p-4 relative min-h-screen flex flex-col pt-24 items-center justify-center bg-color1 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navbar />

      {/* <div className="absolute inset-0 bg-color1"></div> */}
      <div
        className={`relative rounded-xl p-8 w-full max-w-4xl text-white 
                             transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-20 scale-95 opacity-0'}`}
      >
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Testimonial Submission Form
        </h1>

        <form ref={formRef} action={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Form Fields */}
            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Full Name</div>
                  <input
                    required
                    type='text'
                    name='name'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='John Doe'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Contact No</div>
                  <input
                    required
                    type='number'
                    name='contactNo'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='+91 1234567890'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Email</div>
                  <input
                    required
                    type='email'
                    name='email'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='personal email'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Graduation Year</div>
                  <input
                    required
                    type='number'
                    name='graduationYear'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='2023'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Designation</div>
                  <input
                    required
                    type='text'
                    name='designation'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='Student/Software Developer'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4'>Course</div>
                  <input
                    required
                    type='text'
                    name='course'
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='B.Tech Computer Science'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4 flex items-center gap-2'>
                    Achievements
                    <span className='text-gray-400 text-sm'>
                      (in max of 4-5 lines)
                    </span>
                  </div>
                  <textarea
                    name='achievements'
                    required
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='Achievements...'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4 flex items-center gap-2'>
                    Your Testimonial
                    <span className='text-gray-400 text-sm'>
                      (in max of 4-5 lines)
                    </span>
                  </div>
                  <textarea
                    name='testimonial'
                    required
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='Gourab Chakraborty - IIIT Dharwad is an excellent college and has improved even further with the new batches and faculties that have come. A lot of good investments have been made in the college’s infrastructure and people....'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4 flex items-center gap-2'>
                    Memorable Experience
                    <span className='text-gray-400 text-sm'>
                      (in max of 4-5 lines)
                    </span>
                  </div>
                  <textarea
                    name='memorableExperience'
                    required
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='Memorable experience during your time...'
                  />
                </div>
              </div>
            </div>

            <div className='w-full flex-1 border-t border-t-slate-700 py-10'>
              <div className='val flex w-full text-[1.3rem]'>
                <div className='flex flex-col w-full'>
                  <div className='mb-4 flex items-center gap-2'>
                    Encouragement
                    <span className='text-gray-400 text-sm'>
                      (in max of 4-5 lines)
                    </span>
                  </div>

                  <textarea
                    name='encouragement'
                    required
                    className='placeholder:text-gray-700 border-none outline-none focus:outline-none bg-transparent w-full'
                    placeholder='Encouragement to juniors...'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* File Inputs */}
          <div className='space-y-6'>
            <div>
              <label className='block mb-2' htmlFor='photo'>
                Photo (A clear headshot with only your face):
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='photo'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition'
                >
                  <div
                    style={{
                      backgroundImage: photo
                        ? `url(${URL.createObjectURL(photo)})`
                        : 'none',
                    }}
                    className='flex flex-col items-center bg-contain bg-no-repeat bg-center justify-center w-full h-full'
                  >
                    <div className='flex flex-col items-center p-2 bg-[#171717a1] w-full h-full justify-center pt-5 pb-6'>
                      <FaFileUpload className='text-gray-200 text-28px mb-16px' />
                      <p className='mb-2 text-sm text-gray-200'>
                        <span className='font-semibold'>Click to upload</span>
                        or drag and drop
                      </p>
                      <p className='text-xs text-gray-200'>
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id='photo'
                      type='file'
                      name='photo'
                      accept='.png, .jpg, .jpeg, .webp'
                      onChange={handleFileChange}
                      className='hidden'
                    />
                  </div>
                </label>
              </div>

              {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
            </div>

            <div>
              <label className='block mb-2' htmlFor='video'>
                Testimonial Video (Optional but encouraged):
              </label>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='video'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700/20 hover:bg-gray-700/40 transition'
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
                    <p className='text-sm text-gray-400'>
                      Click to upload or drag and drop
                    </p>
                    <p className='text-xs text-gray-400'>
                      {fileNames.video || 'Max size: 50MB'}
                    </p>
                  </div>
                  <input
                    id='video'
                    name='video'
                    type='file'
                    accept='.mp4, .webm, .ogg'
                    className='hidden'
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <div className='val flex w-full mt-4 text-[1.3rem]'>
              <div className='flex items-start w-full'>
                <input
                  required
                  id='consent'
                  name='consent'
                  type='checkbox'
                  className='w-4 h-4 rounded border-gray-600 bg-gray-700'
                />
                <label htmlFor='consent' className='ml-2 text-sm text-gray-400'>
                  I agree to allow IIIT Dharwad to use my details for the event
                  and future correspondence.
                </label>
              </div>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
