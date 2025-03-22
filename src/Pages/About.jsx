import React, { useEffect, useState } from 'react'
import CountryData from '../Components/CountryData.json'
import axios from 'axios'

const About = () => {
  const [data, setData] = useState([])
  // console.log('About',CountryData)

  const apiData = async () =>{
      const res = await axios.get('https://server-lfgg.onrender.com/api/getAll')
      console.log(res.data)
      setData(res.data)
  }
  useEffect(() => {
    apiData();
  }, [])
  
  return (
    <>
    <h1 className='mt-20 text-center font-bold text-2xl'>Here are the User Message </h1>
    <div className='max-w-[1170px] mx-auto grid grid-cols-3 gap-4 my-10'>
      {data.map((CurData,i) => {
        const {country_name,capital,population,interesting_fact, fname, lname,email, message} = CurData
        return (
          <div className='bg-[#7a7676bb] p-4 rounded-md text-white' key={i}>
            <h2 className='font-bold text-xl'>{country_name}</h2>
            <p><span className='text-[#373434] font-bold'>First Name : </span>{fname}</p>
            <p><span className='text-[#373434] font-bold'>Last Name :</span> {lname}</p>
            <p><span className='text-[#373434] font-bold'>Email :</span>{email}</p>
            <p><span className='text-[#373434] font-bold'>message :</span>{message}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default About