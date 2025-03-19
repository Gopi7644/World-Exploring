import React, { useState } from 'react'

const Filter = ({ search, setSearch, fillter, setFillter, country, setCountry }) => {
  const [active, setActive] = useState("")
  const handleInputChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSelectChange = (e) => {
    e.preventDefault()
    setFillter(e.target.value)
  }

  const shortCountries = (value) => {
    const shortCountry = [...country].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    })
    setCountry(shortCountry);
    setActive(value);
  };

  return (
    <>
      <section className='mt-20 max-w-[1170px] mx-auto flex justify-around'>
        <input
          className='border p-2 rounded-md'
          type="text"
          placeholder='Search'
          value={search}
          onChange={handleInputChange}
        />

        <button
          onClick={() => shortCountries("asc")}
          className={`${active === "asc" ? "bg-blue-600 p-[2px_10px] rounded-lg" : "bg-gray-700 p-[2px_10px] rounded-lg"}`}>
            Asc</button>


        <button onClick={() => shortCountries("dec")}
          className={`${active === "dec" ? "bg-blue-600 p-[2px_10px] rounded-lg" : "bg-gray-700 p-[2px_10px] rounded-lg"}`}
          >Dsc</button>

        <div>
          <select
            onChange={handleSelectChange}
            value={fillter}
            className='bg-black text-white p-2 rounded-md border'>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  )
}

export default Filter