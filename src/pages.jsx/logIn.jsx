'use client'

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LogIn_Page() {
  const [logIn_data, setLogIn_Data] = useState({
    emailAdd: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setLogIn_Data({
      ...logIn_data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:4000/login/', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(logIn_data)
        })
        const dataLogIn = await response.json();
        console.log(dataLogIn)
        const status = response.status;
        if (status === 200) {
          navigate(`${dataLogIn._id}/dashboard`)
        } 

        if(status === 404) {
          alert('error')
        }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  console.log(logIn_data)
  return (
    <>
      <div className="">
        <h1 className="text-center">Log In Form</h1>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="">Email: </label>
          <input type="text" name="emailAdd" onChange={handleChange} className="border border-black"/>
          <label htmlFor="">Password: </label>{" "}
          <input type="password" name="password" id="" onChange={handleChange} className="border border-black"/>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}
