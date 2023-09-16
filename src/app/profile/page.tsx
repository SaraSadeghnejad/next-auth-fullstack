"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';

type Props = {}

function Profile({}: Props) {
    const router =useRouter()
    const logout = async()=>{
        try{
         await axios.get('/api/users/logout');
         toast.success("logout successfully");
         router.push('/login')
        }catch(error){
          console.log(error.message);
          toast.error(error.message)
        }
    }
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <p>Profile page</p>
      <button className="bg-blue-600 my-3 p-2 rounded-sm " onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default Profile