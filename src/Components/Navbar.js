import React from 'react'

function Navbar() {
    return (
        <div className="bg-blue-200 px-32 py-2">
            <div className="w-full  md:mx-auto md:flex md:items-center md:justify-between">
                <div>
                <a href="#" className="inline-block py-2 text-gray-800 text-2xl font-bold border border-blue-700">Covi Test</a>
                </div>
                
                <div className="hidden md:block">
                    <a
                    href="#"
                    className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
                    >How it Works</a
                    >
                    <a
                    href="#"
                    className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >Solutions</a>
                    
                    <a
                    href="#"
                    className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >Pricing</a>
                    <a
                    href="#"
                    className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                    >Desktop</a>
                </div>

                <div className="hidden md:block">
                <a href="#" className="inline-block py-3 text-center w-28 border border-blue-400 rounded-xl text-gray-500 hover:text-gray-600 mr-6">Login</a>
                <a href="#" className="inline-block py-3 text-center w-28 text-gray-100 bg-blue-700 hover:bg-blue-800 rounded-xl shadow-lg">
                Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
