import React, { useEffect, useState } from 'react';
import { Brands, Cart, FooterWep, Forgot, Home, Navbar, Product, Profile, SignIn, SignOut, Store, Wishlist } from '../pages/root';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Load from './Load';
export default function Container() {
    const [open, setOpen] = useState(true);
    const [sign, setsign] = useState(localStorage.getItem("sign"));
    useEffect(() => {
        window.addEventListener("load", () => {
            setOpen(false)
        })
    })
    return (
        <>
            <Router>
                {sign === "true" ? (<>
                    <Navbar />
                </>) : null}
                <Load open={open} />
                <div className="container mx-auto">
                    <Routes>
                        {sign === "true" ? (<>
                            <Route path="/Home" element={<>
                                <Home />
                            </>} />
                            <Route path="/" element={<>
                                <Home />
                            </>} />
                            <Route path="/Cart" element={<Cart />} />
                            <Route path="/Store" element={<Store />} />
                            <Route path="/Brands" element={<Brands />} />
                            <Route path="/Product/:id" element={<Product />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Wishlist" element={<Wishlist />} />
                        </>) : (<>
                            <Route path="/SignIn" element={<SignIn />} />
                            <Route path="/" element={<SignIn />} />
                            <Route path="/SignUp" element={<SignOut />} />
                            <Route path="/Forgot" element={<Forgot />} />
                        </>)
                        }
                    </Routes>
                    {sign === "true" ? (<>
                        <FooterWep />
                    </>) : null}
                </div>
                <button onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }} className='fixed bottom-4 right-4 bg-indigo-600 p-3 shadow-lg shadow-blue-600 transition-all active:scale-95 rounded-full text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            </Router>
        </>
    )
}
