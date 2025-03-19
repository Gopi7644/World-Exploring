import React from 'react'
import CountryData from '../Components/CountryData.json'

const About = () => {
  // console.log('About',CountryData)
  return (
    <>
    <h1 className='mt-20 text-center font-bold text-2xl'>Here are the Intereseting Facts <br /> we're proud of</h1>
    <div className='max-w-[1170px] mx-auto grid grid-cols-3 gap-4 my-10'>
      {CountryData.map((CurData) => {
        const {country_name,capital,population,interesting_fact} = CurData
        return (
          <div className='bg-[#7a7676bb] p-4 rounded-md text-white' key={country_name}>
            <h2 className='font-bold text-xl'>{country_name}</h2>
            <p><span className='text-[#373434] font-bold'>Capital : </span>{capital}</p>
            <p><span className='text-[#373434] font-bold'>Population :</span> {population}</p>
            <p><span className='text-[#373434] font-bold'>interesting fact :</span>{interesting_fact}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default About