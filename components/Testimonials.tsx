/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getTestimonials } from '../app/actions/testimonials';
import Image from 'next/image';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const { success, testimonials, error } = await getTestimonials();
    if (success) {
      setTestimonials(testimonials);
    } else {
      console.error('Error fetching testimonials:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div>
      {testimonials.map((testimonial: any) => (
        <div key={testimonial._id}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.testimonial}</p>
          {testimonial.photoUrl && (
            <Image
              src={testimonial.photoUrl}
              alt={testimonial.name}
              width='100'
              height='100'
            />
          )}
          {testimonial.videoUrl && (
            <video src={testimonial.videoUrl} controls />
          )}
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
