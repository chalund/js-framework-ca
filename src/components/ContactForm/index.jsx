import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState('')

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name must be at least 3 characters';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Full name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'a Valid email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject must be at least 3 characters';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message must be at least 3 characters';
    } else if (formData.message.trim().length < 3) {
      errors.message = 'Message must be at least 3 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (validateForm()) {
      // Submit the form data, console.log to data to meet form validation
      console.log('Form submitted:', formData);

      setAlert('Your message has been sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value} =e.target;

    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
        ...errors,
        [name]: value.trim().length >= 3 ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least 3 characters`
      });
  };

  const sendMessageClick = () => {
    if (validateForm()) {
      toast.success('Message is sent!', {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };
  
  
  return (
    <div className='mx-auto w-full sm:max-w-[70%] border md:max-w-[500px] p-5 rounded shadow-md bg-white'>
      <ToastContainer />
        <div className='text-center my-8'>
          <h1 className='text-3xl mb-3'>Contact us</h1>
          <p className='mx-6'>We're here to help! Please fill out the form below, and our dedicated team will get back to you as soon as possible.</p>
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
                  className={`w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-base font-medium   focus:border-purple-600  focus:ring-0 focus:shadow-md ${errors.name && 'border-red-700'}`}
                  />
                {errors.name && <p className="text-red-700 text-sm mt-1">{errors.name}</p>}
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
                  className={`w-full rounded-md border border-gray-300 bg-gray-50 py2 px-3 text-base font-medium  focus:border-purple-600 focus:ring-0 ${errors.name && 'border-red-700'}`}
                />
                {errors.subject && <p className="text-red-700 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className='mb-1'>
                <label htmlFor="e-mail" className="mb-1 block text-base font-medium text-gray-800">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-base font-medium  focus:border-purple-600  focus:ring-0 ${errors.name && 'border-red-700'}`}
                />
                {errors.email && <p className="text-red-700 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className='mb-5'>
                <label htmlFor="message" className="mb-1 block text-base font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Type your message.."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-base font-medium focus:border-purple-600  focus:ring-0 ${errors.message && 'border-red-700'}`}
                />
                {errors.message && <p className="text-red-700 text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="mx-auto flex items-center justify-center">
                <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-purple-600 hover:bg-gradient-to-r from-orange-300 to-fuchsia-500 py-2 px-4 text-base font-semibold text-white outline-none"
                    onClick={sendMessageClick}
                >
                    Send message
                </button>
                </div>
            </form>
          </div>
        </div>
    </div>
  );
};