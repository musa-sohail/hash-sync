'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmissionMessage('Thank you for your message!'); // Update state with success message
        form.reset(); // Reset the form fields
      } else {
        setSubmissionMessage('Oops! There was a problem submitting your message.'); // Update state with error message
      }
    } catch (error) {
      console.error('Error submitting form:', error); // Log any errors
      setSubmissionMessage('Oops! There was a problem submitting your message.'); // Update state with error message
    }
  };

  return (
    <div className="contact">
      <h2 className="text-5xl font-bold mb-12 mt-10 text-black text-center">
        <span>Reach Us </span>
        <span className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00848c]"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative text-[#00848c]">Out</span>
        </span>
      </h2>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Rawalpindi,%20Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Rawalpindi, Pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:example@email.com" className="text-[#00848c] leading-relaxed">aaziq@hash-sync.com</a>
              </div>
            </div>
          </div>
          <form
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xeoqoqvr" // Replace YOUR_FORM_ID with your actual Formspree endpoint
            method="POST"
          >
            <h2 className="text-[#00848c] text-lg mb-1 font-medium title-font">Contact Us</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-[#00848c] focus:ring-2 focus:ring-[#00848c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-[#00848c] focus:ring-2 focus:ring-[#00848c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-[#00848c] focus:ring-2 focus:ring-[#00848c] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-[#00848c] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg">Send</button>
            <p className="text-xs text-gray-500 mt-3">We’ll get back to you as soon as possible.</p>
          </form>
        </div>
      </section>
      {submissionMessage && ( // Conditionally render the submission message
        <div className="mt-4 text-center text-lg text-[#00848c]">
          {submissionMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
