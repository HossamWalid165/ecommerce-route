import React, { useState } from 'react'

export default function Profile() {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
    return (
        <>
            <div className="profile w-full h-dvh flex justify-center items-center">
                <div className="w-9/12 h-5/6 rounded-lg bg-white shadow-xl p-5">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <div className="w-full h-auto p-4 rounded-lg bg-white shadow-lg mt-4">
                        <div className="w-full h-auto flex gap-1 flex-col p-3">
                        <p>Name: <input className="text-blue-500 outline-none" value={user.name} /></p>
                            <p>Email: <input className="text-blue-500 outline-none" value={user.email} /></p>
                            {/* <p>Password: <input className="text-blue-500 outline-none" value={user.password} /></p> */}
                        </div>
                        <hr />
                        <div className="w-full h-auto flex justify-center items-center flex-col p-2">
                            <address>Your Address</address>
                            <div className="w-full h-auto p-2 flex gap-1 flex-col">
                                <p>name: <input className="text-blue-500 outline-none"  /></p>
                                <p>details: <input className="text-blue-500 outline-none"  /></p>
                                <p>phone: <input className="text-blue-500 outline-none" /></p>
                                <p>City: <input className="text-blue-500 outline-none"  /></p>
                            </div>
                        <div className="w-full h-auto flex justify-end items-center p-2">
                            <button className="bg-blue-500 text-white  px-5 py-2 rounded-md ">Update</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-dvh  fixed top-0 left-0 z-30 bg-black/25 flex justify-center items-center">
                <div className="w-9/12 h-1/2 rounded-lg bg-white shadow-xl flex justify-center items-center">
                    <h1 className="text-6xl text-blue-800 uppercase font-bold">Under maintenance</h1>
                </div>
            </div>
        </>
    )
}
