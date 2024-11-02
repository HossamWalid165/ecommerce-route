import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/29-292050_shopping-cart-svg-clip-arts-600-x-534-px-shopping-cart-logo (1).png"

export default function signIn() {
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
                      Sign in to your account
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
                                  className="block inputEmail pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                              />
                          </div>
                      </div>
                      
                      <div>
                          <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                  Password
                              </label>
                              <div className="text-sm">
                                  <Link to="/Forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                      Forgot password?
                                  </Link>
                              </div>
                          </div>
                          <div className="mt-2">
                              <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  required
                                  autoComplete="current-password"
                                  className="block inputPassword pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                              />
                          </div>
                      </div>

                      <div>
                          <button onClick={(e) => {
                              //   localStorage.setItem("sign", "true");
                              if (
                                  document.querySelector(".inputEmail").value === ""
                                  ||
                                  document.querySelector(".inputPassword").value === ""
                              ) {
                                  alert("Please enter your email and password");
                              } else {
                                  fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                                      method: "POST",
                                      headers: {
                                          "Content-Type": "application/json",
                                          "token": localStorage.getItem("token")
                                      },
                                      body: JSON.stringify({
                                          "email": document.querySelector(".inputEmail").value,
                                          "password": document.querySelector(".inputPassword").value
                                      })
                                  }).then((res) => res.json()).then((data) => {
                                      console.log(data)
                                      localStorage.setItem("token", data.token)
                                      alert(data.message);
                                      if (data.message === "success") {
                                          localStorage.setItem("sign", "true");
                                          localStorage.setItem("user", JSON.stringify(data.user));
                                          window.location.reload();
                                          window.location.href = "/";
                                      } else {
                                          localStorage.setItem("sign", "false");
                                      }
                                  })
                              }
                          
                          }}
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                              Sign In
                          </button>
                      </div>
                  </div>

                  <p className="mt-10 text-center text-sm/6 text-gray-500">
                      Not a member?{' '}
                      <Link to="/SignUp" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          SignUp
                      </Link>
                  </p>
              </div>
          </div>
      </>
  )
}
