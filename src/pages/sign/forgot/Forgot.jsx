import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/29-292050_shopping-cart-svg-clip-arts-600-x-534-px-shopping-cart-logo (1).png"

export default function Forgot() {
  return (
    <>
      <div className="flex min-h-dvh flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Forgot Password to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block inputEmailF pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button onClick={(e) => {
                //   localStorage.setItem("sign", "true");
                if (
                  document.querySelector(".inputEmailF").value === ""
                ) {
                  alert("Please enter your email and password");
                } else {
                  fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      "email": document.querySelector(".inputEmailF").value
                    })
                  }).then((res) => res.json()).then((data) => {
                    console.log(data)
                    alert(data.message);
                  })
                }

              }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            member?{' '}
            <Link to="/SignIn" className="font-semibold text-indigo-600 hover:text-indigo-500">
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
