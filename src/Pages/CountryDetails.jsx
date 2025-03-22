import React, { useEffect, useState, useTransition } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getIndCountries } from '../Components/Api';
import Loader from '../Components/Loader';

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [countryD, setCountryD] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountries(params.id);
      console.log(res.data);
      if (res.status === 200) {
        setCountryD(res.data[0]);
      }
    });
  }, [])

  // if (isPending) return <Loader />
  if (!countryD) return <Loader />
  return (
    <>
      <section>
        <div className='max-w-[1170px] mx-auto  mt-50 border-t border-b border-blue-400 relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='flex justify-center items-center mt-8 md:mt-0'>
              <img src={countryD.flags.svg} className='w-[200px]' alt="flag" />
            </div>
            <div className='mb-10 mt-2 ml-10 md:ml-0'>
              <h1 className='text-2xl font-bold'>{countryD.name.official}</h1>
              <p><span className='font-bold text-gray-600'>Native Name : </span>
              {
                Object.keys(countryD.name.nativeName).map((key) => countryD.name.nativeName[key].common).join(', ')
              }</p>
              <p><span className='font-bold text-gray-600'>Population : </span>{countryD.population.toLocaleString()}</p>
              <p><span className='font-bold text-gray-600'>Region : </span>{countryD.region}</p>
              <p><span className='font-bold text-gray-600'>Subregion : </span>{countryD.subregion}</p>
              {/* <p><span className='font-bold text-gray-600'>Capital : </span>{countryD.capital}</p> */}
              <p><span className='font-bold text-gray-600'>Top Level Domain : </span>{countryD.tld}</p>
              
              <p><span className='font-bold text-gray-600'>Currencies : </span>
              {
              Object.keys(countryD.currencies).map((country) => countryD.currencies[country].name).join(', ')
              }
              </p>
              <p><span className='font-bold text-gray-600'>Languages : </span>
              {
              Object.keys(countryD.languages).map((key) => countryD.languages[key]).join(', ')
              }
              </p>
              
            </div>
          </div>
          <Link to="/country" className='bg-blue-500 p-[4px_15px] rounded-lg absolute bottom-3  right-4'>
            <button>Back</button>
          </Link>
        </div>
      </section>




    </>
  )
}

export default CountryDetails;