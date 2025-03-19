import React, { useState } from 'react'

const Contact = () => {
  const [inputData, setInputData] = useState({});

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setInputData(data);
    localStorage.setItem('formData', JSON.stringify(data));

    alert("Your Message has been send successfully");
  }

  return (
    <>
      <section className='max-w-[1170px] mx-auto my-20'>
        <h1 className='text-center font-bold text-2xl'>Contact Us</h1>
        <div className='mt-10'>
          <form action={handleFormSubmit}
            className='flex flex-col justify-center items-center gap-6'>
            <input
                type="text"
                placeholder='Enter Your Name'
                name='username'
                required
                autoComplete='off'
                className='w-[400px] border p-2 rounded-md'
              />
            {/* <input
              type="password"
              placeholder='Enter Your password'
              name='password'
              required
              autoComplete='off'
              className='w-[400px] border p-2 rounded-md'
            /> */}
            <input
              type="email"
              placeholder='Enter Your Email'
              name='mail'
              required
              autoComplete='off'
              className='w-[400px] border p-2 rounded-md'
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              required
              className='w-[400px] border p-2 rounded-md'
              placeholder='Enter Your Message'></textarea>
            <div className='flex w-[400px] justify-start'>
              <button
                type='submit'
                value="send"
                className='w-full bg-[#292828bb] text-white p-2 rounded-full text-left border'
              >Send</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact