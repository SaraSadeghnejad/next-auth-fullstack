"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

export default function LoginPage({}: Props) {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
     const [disabledButton, setDisabledButton] = useState(false);
     const [loading, setLoading] = useState(false);
     useEffect(() => {
       if (
         user.email.length > 0 &&
         user.password.length > 0
       ) {
         setDisabledButton(false);
       } else {
         setDisabledButton(true);
       }
     }, [user]);
  const onLogin = async() => {
        try {
          setLoading(true);
          const response = await axios.post("/api/users/signup", user);
          console.log("user login", response);
          router.push("/profile");
          toast.success("welcome")
        } catch (err: any) {
          console.log("login failed", err.message);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <h1>{loading ? "Proccessing" : "login"}</h1>
      <div className="flex flex-col my-5">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded-sm"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e: any) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded-sm"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e: any) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <button className="bg-red-400 my-3 p-2 rounded-sm " onClick={onLogin}>
        {disabledButton?'not submit':'Submit'} 
      </button>
      <Link href="/signup">Go to Sign Up</Link>
    </div>
  );
}
