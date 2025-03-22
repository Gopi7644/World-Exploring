import React, { useEffect, useState, useTransition } from 'react'
import { getCountries } from '../Components/Api';
import Loader from '../Components/Loader';
import Card from '../Components/Card';
import Filter from '../Components/Filter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState("")
  const [fillter, setFillter] = useState("all")

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountries();
      // console.log(res.data);
      setCountry(res.data);
    });
  }, [])

  if (isPending) return <Loader />

  const searchCountry = (curCurentry) => {
    if (search) {
      return curCurentry.name.common.toLowerCase().includes(search.toLowerCase());
    } return country;
  }

  const fillterRigion = (curCurentry) => {
    if (fillter === "all") return curCurentry;
    return curCurentry.region === fillter;
  }

  const fillterCountries = country.filter((curCurentry) => searchCountry(curCurentry) && fillterRigion(curCurentry))

  return (
    <section>
      <Filter
          search={search}
          setSearch={setSearch}
          fillter={fillter}
          setFillter={setFillter}
          country={country}
          setCountry={setCountry}
        />

      <ul className='max-w-[1170px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-25 md:gap-x-0'>
        {
          fillterCountries.map((curData, i) => {
            return <Card key={i} curData={curData} />
          })
        }
      </ul>

    </section>
  )
}

export default Country