import React, { useEffect, useState } from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
export default function Home() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("https://ecommerce.routemisr.com/api/v1/categories")
      .then(r => r.json())
      .then(d => {
        setCategories(d.data)
    })
  },[])
  return (
    <>
    <section onMouseMove={(e) => {
      document.querySelector(".home").style.backgroundPositionX = e.pageX + "px";
      document.querySelector(".home").style.backgroundPositionY = e.pageY + "px";
    }} style={{ height: "77dvh" }} className=' home w-full '>
      <div className='w-full h-full flex flex-col justify-center items-center z-0'>
        <p>Explore , discover , Shopping</p>
        <h1 className='text-6xl font-bold text-black'>Welcome to my website</h1>
        <p className='text-3xl font-bold pt-1 text-black'>This is my website</p>
      </div>
        
      </section>
      <section className="about w-full h-auto p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-center text-3xl p-6">About Us</h1>
              <div className="about-content p-6 w-full h-auto  flex justify-around items-center">
                <div className="itemAS">
                  <div className="flex justify-center items-center w-full h-full gap-2">
                    <h1 className="text-3xl font-bold">50</h1>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className="itemAS">
                  <div className="flex justify-center items-center w-full h-full gap-2">
                    <h1 className="text-3xl font-bold">100</h1>
                    <p>Customers</p>
                  </div>
                </div>
                <div className="itemAS">
                  <div className="flex justify-center items-center w-full h-full gap-2">
                    <h1 className="text-3xl font-bold">99</h1>
                    <p>Shopping</p>
                  </div>
                </div>
                <div className="itemAS">
                  <div className="flex justify-center items-center w-full h-full gap-2">
                    <h1 className="text-3xl font-bold">100</h1>
                  <p>Speed order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-80 gap-6 categories scroll-smooth bg-white items-center flex overflow-auto px-8'>
        {categories.map((item, i) => (
          <>
            <div className="w-48 h-56 flex-shrink-0  rounded-lg bg-base-100 shadow-xl overflow-hidden ">
              <img src={item.image} alt="Card" className="w-full h-full object-cover" />
            </div>
          </>
        ))}
      </section>
    </>
  )
}
