"use client"
import axios, { Axios } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

type Props = {}

function Profile({}: Props) {
    const router =useRouter()
    const [data,setData]=useState('nothing')
    const logout = async()=>{
        try{
         await axios.get('/api/users/logout');
         toast.success("logout successfully");
         router.push('/login')
        }catch(error:any){
          console.log(error.message);
          toast.error(error.message)
        }
    }
    const getUserDetails = async()=>{
      const res= await axios.get('/api/users/me')
      setData(res.data.data._id)
      console.log(res.data.data);
    }
  return (
    <div className="flex flex-col py-2 justify-center items-center bg-black text-white min-h-screen">
      <p>Profile page</p>
      <h2>{data === "nothing"?"Nothing":<Link  href={`/profile/${data}`}>{data}</Link>}</h2>
      <button className="bg-green-600 my-3 p-2 rounded-sm " onClick={getUserDetails}>
        get user detail
      </button>
      <button className="bg-blue-600 my-3 p-2 rounded-sm " onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default Profile