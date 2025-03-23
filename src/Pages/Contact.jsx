import axios from 'axios';
import React, { useState } from 'react';
import About from './About';

const Contact = () => {
  const [inputData, setInputData] = useState({});
  const [error, setError] = useState(""); // State to handle error messages

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(e.target); // Get form data
    const data = Object.fromEntries(formData.entries()); // Convert form data to an object
    setInputData(data);

    const { fname, lname, email, message } = data;

    // Validate input fields
    if (!fname || !lname || !email || !message) {
      setError("Please fill out all required fields.");
      return;
    }
    // http://localhost:8000/api/create
    // https://server-lfgg.onrender.com/api/create
    try {
      const res = await axios.post('https://server-lfgg.onrender.com/api/create', data);
      alert("Your message has been sent successfully!");
      console.log(res.data);
      setError(""); // Clear any previous errors
      e.target.reset(); // Reset the form after successful submission
    } catch (err) {
      console.error(err);
      setError("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <>
      <section className='max-w-[1170px] mx-auto my-20'>
        <h1 className='text-center font-bold text-2xl'>Contact Us</h1>
        <div className='mt-10'>
          <form
            onSubmit={handleFormSubmit}
            className='flex flex-col justify-center items-center gap-6'
          >
            <input
              type="text"
              placeholder='Enter Your First Name'
              name='fname'
              autoComplete='off'
              className='w-[350px] md:w-[400px] border p-2 rounded-md'
            />
            <input
              type="text"
              placeholder='Enter Your Last Name'
              name='lname'
              autoComplete='off'
              className='w-[350px] md:w-[400px] border p-2 rounded-md'
            />
            <input
              type="email"
              placeholder='Enter Your Email'
              name='email'
              autoComplete='off'
              className='w-[350px] md:w-[400px] border p-2 rounded-md'
            />
            {/* <input
              type="file"
              name='profilePic'
              className='w-[350px] md:w-[400px] border p-2 rounded-md'
            /> */}
            <textarea
              name="message"
              cols="30"
              rows="5"
              className='w-[350px] md:w-[400px] border p-2 rounded-md'
              placeholder='Enter Your Message'
            ></textarea>
            {error && <p className='text-red-500'>{error}</p>} {/* Display error message */}
            <div className='flex w-[350px] md:w-[400px] justify-start'>
              <button
                type='submit'
                className='w-full bg-[#292828bb] text-white p-2 rounded-full text-left border'
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <About />
      </section>
    </>
  );
};

export default Contact;