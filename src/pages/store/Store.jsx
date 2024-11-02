import React, { useEffect, useState } from 'react'
import './store.css';
import 'react-notifications/lib/notifications.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import { Navbar } from '../root';
import { NumCart } from '../navbar/Navbar';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Store() {

  const [products, setProducts] = useState([]);
  const [Dateproducts, setDateProducts] = useState([]);

  useEffect(() => {
    axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
      setProducts(res.data.data);
      setDateProducts(res.data.data);
    });
  }, [])
  return (<>

    <section className='w-full p-4 bg-white h-40 flex justify-center items-center'>
      <input onChange={(e) => {

        setProducts(Dateproducts.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))

      }} type="text" placeholder="Search Product" className='w-9/12 h-12 border-2 rounded-md p-2' />
    </section>
    <section className='w-full h-auto flex flex-wrap justify-center items-center gap-12  py-14 '>
      {products.length > 0 ? products.map((item, i) => (
        <>
          <div key={i} idcart={item._id} className={`card ${"product" + i} relative h-auto flex-shrink-0 lg:w-64 md:w-64 sm:w-60 w-96 p-3 rounded-l-lg bg-base-100 shadow-xl overflow-hidden product`}>
            <button onClick={() => {
              fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem("token")
                },
                body: JSON.stringify({ productId: item._id })
              }).then(res => res.json())
                .then(data => {
                  // if (data.message === "Added to wishlist") {
                    NotificationManager.success("Added to wishlist", "Success", 2000);
                  // } else {
                  //   NotificationManager.error(data.message, "Error", 2000);
                  // }
                  // console.log(data);
                  
                })
              
            }} className="absolute top-3 right-3 btn-stare p-2 rounded-lg text-white flex justify-center items-center z-20 bg-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </button>
            <Link to={`/product/${item._id}`} className='w-full img-product h-auto cursor-pointer relative'>
              <div className={`${"load-img-product" + i} w-full h-full absolute z-10 bg-indigo-400 flex justify-center text-9xl text-white items-center inset-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
              </div>
              <div className="w-full h-full absolute img-show-product transition-all inset-0 z-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <img onLoad={(e) => {
                document.querySelector(`.load-img-product${i}`).style.display = "none";
              }} loading="lazy" className='w-full h-full min-h-52' src={item.imageCover} alt="Shoes" />
            </Link>
            <div className="card-body pt-2">
              <div className="flex justify-between items-center">
                <h2 className="card-title">{item.title.slice(0, 8) + "..."}</h2>
                <div className="flex items-center gap-2">
                  <p>${item.price}</p>
                  |
                  <p className='flex items-center'>{item.ratingsAverage}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-orange-400">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="card-actions flex justify-center w-full">
                <button onClick={() => {
                  let idcart = document.querySelector(`.product${i}`).getAttribute("idcart");

                  fetch("https://ecommerce.routemisr.com/api/v1/cart", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                      "token": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                      "productId": idcart,
                    })
                  }).then((res) => res.json()).then((d) => {
                    NotificationManager.success('has been added successfully', 'The product .');
                  })


                }} className="btn btn-add w-full h-11 rounded-md text-white bg-green-500">+Add</button>
              </div>
            </div>
          </div>
        </>
      )) :
        <div className="card w-64 h-64 flex-shrink-0 p-3 rounded-l-lg bg-base-100 shadow-xl overflow-hidden product">
          <img className='w-full h-full' src="https://i.ibb.co/0qNq5Xx/empty.png" alt="" />
        </div>
      }
    </section>
    <NotificationContainer></NotificationContainer>
  </>
  )
}
