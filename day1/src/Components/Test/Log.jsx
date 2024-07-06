import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Log = () => {
const[userData, setUserData] = useState({
    email : "",
    password : ""
})

console.log(userData,"userdata")

function handleChnage(event){
    setUserData({...userData,[event.target.name] : [event.target.value]});
}

function handleSubmit(e){
    e.preventDefault();
    try {
        if(userData.email && userData.password){
            const respone = {
                data : {success : true, message : "Login Successfull !"}
            }
            if(respone.data.success){
                setUserData({
                    email : "",
                    password : ""
                });
                toast.success(respone.data.message);
            }
        }else{
            throw Error ("All fields are mandatory");
        }
    } 
    catch (error) {
        console.log(error);
    }
}
  return (
    <div>
        <form onSubmit={handleSubmit    }>
            <h1>Login</h1>
            <label htmlFor="">Email</label><br />
            <input type="email" name="email" onChange={handleChnage} value={userData.email} /><br /><br />

            <label htmlFor="">Password</label><br />
            <input type="password" name="password" onChange={handleChnage} value={userData.password} /><br /><br />

            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Log