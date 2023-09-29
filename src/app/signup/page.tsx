"use client";
import axios from 'axios';
import Link from 'next/link';
import  {useRouter}  from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

type Props = {}

export default function SingupPage({}: Props) {
     const router = useRouter();
    const [user,setUser]=useState({
        username:'',
        email:'',
        password:''
    })
   
    const [disabledButton ,setDisabledButton] = useState(false)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0&&user.username.length>0){
            setDisabledButton(false)
        }else{
            setDisabledButton(true)
        }
     },[user])
    const onSignUp = async() =>{
        try{
   setLoading(true)
   const response = await axios.post("/api/users/signup",user)
   console.log("user signed up",response);
   router.push('/login')
   
        }catch(err:any){
            console.log("Signup failed",err.message)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <h1>{loading?"Proccessing" :"Signup"}</h1>
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="p-2 rounded-sm text-black"
          onChange={(e: any) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col my-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-sm text-black"
          onChange={(e: any) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded-sm text-black"
          onChange={(e: any) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <button className="bg-red-400 my-3 p-2 rounded-sm "  onClick={()=>onSignUp()}>
       {disabledButton?"No signup":"Signup"}
      </button>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}