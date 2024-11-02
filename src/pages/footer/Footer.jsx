import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/29-292050_shopping-cart-svg-clip-arts-600-x-534-px-shopping-cart-logo (1).png"

export default function FooterWep() {
    return (
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping Cart</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/Home" class="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link to="/Store" class="hover:underline me-4 md:me-6">Store</Link>
                        </li>
                        <li>
                            <Link to="/Brands" class="hover:underline me-4 md:me-6">Brands</Link>
                        </li>
                        <li>
                            <Link to="/Cart" class="hover:underline me-4 md:me-6">Cart</Link>
                        </li>
                        <li>
                            <Link to="/Wishlist" class="hover:underline">Wishlist</Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="https://www.facebook.com/Routelearning" class="hover:underline">Route TM </Link>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}