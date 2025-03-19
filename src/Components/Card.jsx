import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Card = ({ curData, i }) => {
    const { name, capital, population, region, flags } = curData;
    return (
        <div key={i} className='w-[240px] p-[30px_15px] my-4 bg-[#7a7676bb] rounded-2xl'>
            <div>
                <img src={flags.svg} alt="" className='w-[200px] rounded-2xl' />
                <div>
                    <h2 className='text-left font-bold text-2xl'>{name.common.length > 10 ? name.common.slice(0, 10) + '...' : name.common}</h2>
                    <p><span className='text-[#373434] font-bold'>Capital : </span>{capital}</p>
                    <p><span className='text-[#373434] font-bold'>Population : </span>{population}</p>
                    <p><span className='text-[#373434] font-bold'>Population : </span>{region}</p>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <NavLink to={`/country/${name.common}`}>
                        <button className='border flex justify-center items-center gap-2 p-[2px_30px] rounded-lg'>Read More
                            <FaLongArrowAltRight className='mt-1' />
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card