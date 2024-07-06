import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Regis = () => {
  const[userData, setUserData] = useState({
    name : "",
    email : "",
    password : ""
  })
  console.log(userData,"userdata")

  function handleChnage(event){
    setUserData({...userData, [event.target.name]: [event.target.value]});
  }

  function handleSubmit(e){
    e.preventDefault();

    try {
      if(userData.name && userData.email && userData.password){
        const respone = {
          data :{success : true, message : "Register Successfull !"}
        }
        if(respone.data.success){
          setUserData({
              name : "",
              email : "",
              password : ""
            });
            
          toast.success(respone.data.message);
        }
      }else {
        throw Error("All fields are mandatory.");
    } }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <label htmlFor="">Enter name</label><br />
            <input type="text" name="name" onChange={handleChnage} value={userData.name} /><br /><br />

            <label htmlFor="">Enter email</label><br />
            <input type="email" name="email" onChange={handleChnage} value={userData.email} /><br /><br />
            
            <label htmlFor="">Enter password</label><br />
            <input type="password" name="password" onChange={handleChnage} value={userData.password} /><br /><br />

            <input type="submit" value="Register" />
        </form>
    </div>
  )
}

export default Regis