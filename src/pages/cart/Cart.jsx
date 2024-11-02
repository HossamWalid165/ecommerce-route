import React, { useEffect } from 'react'
import './cart.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Cart() {
  const [cart, setCart] = React.useState([])

  useEffect(() => {
    axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      }
    }).then((res) => {
      setCart(res.data.data.products);
    })
})
  return (
    <>
      <section className='w-full min-h-dvh h-auto flex  rounded-xl items-center flex-col p-8 gap-8'>
        {
          cart.map((item, index) => {
            return (<>
              <div className="card w-full bg-base-100 h-40 rounded-md flex justify-between items-center shadow-lg p-3">
                <Link to={`/product/${item.product._id}`} className="imgCart h-full w-auto">
                  <img className='w-auto h-full' src={item.product.imageCover} alt="" />
                </Link>
                  <div className="flex items-center gap-4 px-5 justify-center">
                  <input type='text' className={`text-lg ${"inputCart"+index} font-bold flex justify-center items-center text-center rounded-lg outline-none text-black size-10 bg-black/15`} placeholder={item.count} />
                    {/* btn */}
                  <button onClick={() => {
                    fetch(`https://ecommerce.routemisr.com/api/v1/cart/${item.product._id}`, {
                      method: 'PUT',
                      headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem("token")
                      },
                      body: JSON.stringify({
                        count: document.querySelector(`.inputCart${index}`).value === 0 ? 1 : document.querySelector(`.inputCart${index}`).value
                      })
                    }).then((res) => res.json()).then((data) => {
                      document.querySelector(`.inputCart${index}`).value = "";
                      NotificationManager.info('cart updated');
                    })
                    }} className='btn transition-all active:scale-90 btn-primary w-1/2 flex justify-center shadow-md shadow-green-600 items-center rounded-lg text-white bg-green-800 p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                      </svg>
                    </button>
                    <button className='btn transition-all active:scale-90 btn-primary w-1/2 flex justify-center shadow-md shadow-blue-600 items-center rounded-lg text-white bg-blue-800 p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>

                    </button>
                  <button onClick={() => {
                    fetch(`https://ecommerce.routemisr.com/api/v1/cart/${item.product._id}`, {
                      method: 'DELETE',
                      headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem("token")
                      }
                    }
                    ).then(r => r.json()).then(d => {
                      NotificationManager.error('cart removed');
            })}} className='btn transition-all active:scale-90 btn-primary w-1/2 flex justify-center shadow-md shadow-red-600 items-center rounded-lg text-white bg-red-800 p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
              </div>
            </>)
          }) 
        }
        {cart.length === 0 ? (<>
        <h1 className='text-5xl pt-64'>Not Date</h1>
</>):null
}
        {cart.length > 2 ? (<>
          <div className="w-full h-auto py-4 flex justify-center items-center">
            <button onClick={() => {
              fetch("https://ecommerce.routemisr.com/api/v1/cart", {
                method: 'DELETE',
                headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem("token")
                }
              }
              ).then(r => r.json()).then(d => {
                NotificationManager.error('cart removed');
              })
            }} className="btn_remove w-full flex justify-center items-center gap-2 text-white bg-red-600 relative cursor-pointer h-auto p-3 rounded-lg transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
Remove All Cart</button>
          </div>
        </>) : null}
      </section>
      <NotificationContainer></NotificationContainer>

    </>
  )
}
