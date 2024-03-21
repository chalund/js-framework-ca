import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Full name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 3) {
      errors.message = 'Message must be at least 3 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='bg-gradient-to-b from-orange-100 to-orange-400 mx-auto mt- w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[500px] p-5 rounded'>
    <div className='text-center my-8'>
      <h1 className='text-3xl mb-2'>Contact us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur officiis excepturi est velit quod!</p>
    </div>
   
    <div className="flex items-center justify-center">
        
      <div className="mx-auto w-full max-w-[300px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="name" className="mb-1 block text-base font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.name && 'border-red-500'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className='mb-1'>
            <label htmlFor="subject" className="mb-1 block text-base font-medium text-gray-800">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.name && 'border-red-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className='mb-1'>
            <label htmlFor="subject" className="mb-1 block text-base font-medium text-gray-800">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.name && 'border-red-500'}`}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div className='mb-5'>
            <label htmlFor="subject" className="mb-1 block text-base font-medium text-gray-800">
              Subject
            </label>
            <textarea
              rows={4}
              name="message"
              placeholder="Type your message.."
              value={formData.subject}
              onChange={handleChange}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.message && 'border-red-500'}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="mx-auto flex items-center justify-center">
            <button
                type="submit"
                className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-base font-semibold text-white outline-none"
            >
                Submit
            </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  );
};
