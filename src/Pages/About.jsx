import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null); // Track the ID of the user being edited
  const [editData, setEditData] = useState({}); // Store the editable data

  const apiData = async () => {
    const res = await axios.get('https://server-lfgg.onrender.com/api/getAll');
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    apiData();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`https://server-lfgg.onrender.com/api/delete/${id}`);
    console.log(res.data);
    alert('User Deleted successfully');
    apiData();
  };

  const handleEdit = (user) => {
    setEditId(user._id); // Set the ID of the user being edited
    setEditData(user); // Populate the editData state with the user's current data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value }); // Update the editable data
  };

  const handleSave = async (id) => {
    const res = await axios.put(`https://server-lfgg.onrender.com/api/update/${id}`, editData);
    console.log(res.data);
    alert('User Updated successfully');
    setEditId(null); // Exit edit mode
    apiData(); // Refresh the data
  };

  return (
    <>
      <h1 className='mt-20 text-center font-bold text-2xl'>Here are the User Messages</h1>
      <div className='max-w-[1170px] mx-auto sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
        {data.map((CurData, i) => {
          const { country_name, capital, population, interesting_fact, fname, lname, email, message, _id } = CurData;

          return (
            <div className='bg-[#7a7676bb] p-4 rounded-md text-white' key={i}>
              {editId === _id ? (
                // Edit Mode
                <>
                  <input
                    type='text'
                    name='fname'
                    value={editData.fname}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 rounded-md text-black'
                  />
                  <input
                    type='text'
                    name='lname'
                    value={editData.lname}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 rounded-md text-black'
                  />
                  <input
                    type='email'
                    name='email'
                    value={editData.email}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 rounded-md text-black'
                  />
                  <textarea
                    name='message'
                    value={editData.message}
                    onChange={handleInputChange}
                    className='w-full mb-2 p-2 rounded-md text-black'
                  />
                  <button
                    onClick={() => handleSave(_id)}
                    className='bg-green-600 p-2 rounded-md mr-2'
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className='bg-gray-600 p-2 rounded-md'
                  >
                    Cancel
                  </button>
                </>
              ) : (
                // View Mode
                <>
                  <h2 className='font-bold text-xl'>{country_name}</h2>
                  <p>
                    <span className='text-[#373434] font-bold'>User Id: </span>
                    {_id}
                  </p>
                  <p>
                    <span className='text-[#373434] font-bold'>First Name: </span>
                    {fname}
                  </p>
                  <p>
                    <span className='text-[#373434] font-bold'>Last Name: </span>
                    {lname}
                  </p>
                  <p>
                    <span className='text-[#373434] font-bold'>Email: </span>
                    {email}
                  </p>
                  <p>
                    <span className='text-[#373434] font-bold'>Message: </span>
                    {message}
                  </p>
                  <button
                    onClick={() => handleDelete(_id)}
                    className='bg-red-600 p-2 rounded-md mr-2'
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(CurData)}
                    className='bg-blue-600 p-2 rounded-md'
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;