import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { useEffect } from 'react';

const Register = () => {

    const router = useNavigate();
    const [errors, setErrors] = useState([]);
    const [disable, setDisable] = useState(true);
    const [userData, setUserData] = useState({
        name : "",
        email : "",
        password : ""
    });
    console.log(userData,"userdta");

    function handleChange(event){
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    async function handleSumbmit(e){
        e.preventDefault();
        try {
            if(userData.name && userData.email && userData.password){
                const respone = {
                    data: {success: true, message: "Register successfull."}
                };
                if(respone.data.success){
                    setUserData({
                        name : "",
                        email : "",
                        password : ""
                    });
                    router("/login");
                    toast.success(respone.data.message);
                }
            } else {
                throw Error ("All fields are required");
            }
        } catch (error) {
            // toast.error(error.respone.data.message);
        }
    }

    useEffect(() => {
        const errorArray = [];
        if(!userData.name){
            errorArray.push("Nmae is required");
        }

        if(!userData.email){
            errorArray.push("email is required");
        }

        if(!userData.password){
            errorArray.push("password is required");
        }
        setErrors(errorArray);
        console.log(errors.length, "error.length");
        if(errors.length==0){
            setDisable(false);
        }else{
            setDisable(true);
        }
    },[userData]);


  return (
    <div>
        <form onSubmit={handleSumbmit}>
            <h1>Register</h1>
            <label>Name :</label><br />
            <input type="text" name="name" onChange={handleChange} value={userData.name} /><br />

            <label>Email :</label><br />
            <input type="email" name="email" onChange={handleChange} value={userData.email } /><br />
            
            <label>Password :</label><br />
            <input type="password" name="password" onChange={handleChange} value={userData.password} /><br />

            {errors.length > 0 && (
                <div>
                    {errors.map((error, i) => (
                        <p key={i}>{error}*</p>
                    ))}
                </div>
            )}

            <input disabled={disable} type="submit" value="Register" /><br />

        </form>
    </div>
  )
}

export default Register;