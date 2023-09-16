"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function LoginPage({}: Props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const onLogin = () => {};
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
      <div className="flex flex-col my-5">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded-sm"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e: any) => {
            setUser({...user,email:e.target.value});
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
            setUser({...user,password:e.target.value});
          }}
        />
      </div>
      <button className="bg-red-400 my-3 p-2 rounded-sm " onClick={onLogin}>
        Submit
      </button>
      <Link href="/signup">Go to Sign Up</Link>
    </div>
  );
}
