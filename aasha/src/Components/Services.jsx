import React from "react";
import window from './Images/wacd.jpg'
import Fridge from './Images/Fri.jpg'
import Wash from './Images/washing.jpg'
import ac2 from './Images/acr2.jpg'
function Service() {
  return (

    <div className="px-8 ">
      <section class="text-gray-400  body-font">
        <div class="container px-5  mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class=" title-font sm:text-4xl text-3xl 
             font-normal  mb-4 text-[#65a1d7]">OUR SERVICES</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We are provide most effordable service in air-conditioners,Fridges,Washing Machines Geyster and other electronic items.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={ac2} />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-[#65a1d7]">Splite Air-Conditioner</h2>

                  <p class="my-4">AASHA AIR CONDITIONER have INDOOR Expert team to Solve any problem of ac.</p>

                  <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-[#65a1d7] hover:text-white rounded text-base mt-4 md:mt-0">Make an Enquari </button>

                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={window} />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-[#65a1d7]">Window Air-Conditioner</h2>

                  <p class="my-4">AASHA AIR CONDITIONER have Window Expert team to Solve any problem of ac..</p>
                  <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-[#65a1d7] hover:text-white rounded text-base mt-4 md:mt-0">Make an enquari </button>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Fridge} />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-[#65a1d7]">Fridges</h2>

                  <p class="my-4">AASHA AIR CONDITIONER have Fridges Expert team to Solve any problem of Fridges...</p>
                  <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-[#65a1d7] hover:text-white rounded text-base mt-4 md:mt-0">Make an enquari </button>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Wash} />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-[#65a1d7]">Washing Machines</h2>

                  <p class="my-4">AASHA AIR CONDITIONER have Washine-Machine Expert team to Solve any problem of Washing Machinee...</p>
                  <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-[#65a1d7] hover:text-white rounded text-base mt-4 md:mt-0">Make an enquari </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>



  )
}
export default Service