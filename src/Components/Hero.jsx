import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import world from '../assets/world.webp'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/country');
  };

  return (
    <>
      <section className='max-w-[1170px] mx-auto my-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
        {/* Left Content */}
        <div className='flex flex-col justify-center'>
          <h1 className='my-4 font-bold text-3xl md:text-4xl lg:text-5xl'>
            Explore the World, One <br /> Country at a Time.
          </h1>
          <p className='mb-4 text-sm md:text-base lg:text-lg'>
            Discover the rich history, diverse culture, and unique <br />
            features of each country. From the ancient Mayans to the modern-day Indians, there's a place for everyone.
          </p>
          <button
            className='md:static bg-[#605a5abb] p-3 md:p-4 flex items-center gap-2 rounded-md text-center'
            onClick={handleClick}
          >
            Start Exploring
            <FaLongArrowAltRight className='mt-1' />
          </button>
        </div>

        {/* Right Content */}
        <div className='flex justify-center items-center'>
          <div className='w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]'>
            <img src={world} alt="World Map" className='rounded-md' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;