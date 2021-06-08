import React from 'react'
import covidGirl from "../assets/covid-girl.png"

function Header() {
    return (
      <div className="bg-white flex flex-col w-full">
        <div className="bg-blue-100">
          <div className="flex">
            <div className="pt-16 px-32 pb-32 w-2/3">
              <div className="flex">
                <h1 className=" oswald-bold text-gray-700 text-9xl leading-tight mb-6 uppercase">CORONA</h1>
                <div className="text-red-500 pt-6 font-bold oswald-bold text-6xl">COVID 19<br/>VIRUS</div>
              </div>
                <p className="text-gray-600 robo-light md:text-xl mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                </p>
                <button className="bg-blue-700 px-10 py-4 rounded-lg font-bold text-white mr-8">Button 1</button>
                <button className="bg-white px-10 py-4 rounded-lg font-bold text-blue-700">Button 2</button>

                <div className="grid grid-cols-3 gap-10">
                  <div className="py-8 text-center mt-8 bg-white rounded-lg">
                    <h1 className="text-xl oswald-light">SWAB TESTS</h1>
                    <h1 className="text-2xl oswald-bold">10000</h1>
                  </div>

                  <div className="py-8 text-center mt-8 bg-white rounded-lg">
                    <h1 className="text-xl oswald-light">SWAB TESTS</h1>
                    <h1 className="text-2xl oswald-bold">10000</h1>
                  </div>

                  <div className="py-8 text-center mt-8 bg-white rounded-lg">
                    <h1 className="text-xl oswald-light">SWAB TESTS</h1>
                    <h1 className="text-2xl oswald-bold">10000</h1>
                  </div>

                </div>
            </div>  


            <div className="w-1/3 flex align-center pr-8">
              <img className="" src={covidGirl} className="w-full"/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header
