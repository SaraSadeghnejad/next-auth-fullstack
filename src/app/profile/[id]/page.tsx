import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen py-2">
      <h2>profile page</h2>
      <hr />
      <p className="text-4xl">
        Profile page <span className="bg-orange-500 text-black rounded ml-2 p-2">{params.id}</span>
      </p>
    </div>
  );
}

export default UserProfile