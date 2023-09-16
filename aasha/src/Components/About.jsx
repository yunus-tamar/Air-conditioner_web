import React from "react";
// import UserReview from "./Testimonial";
import gas from './Images/acr4.jpg'
import AcService from './Images/ser.jpg'
import AcInstall from './Images/install.jpg'
import fridgeRep from './Images/frip.jpg'
import WashRep from './Images/rwash.jpg'
import geysur from './Images/gey.jpg'

function About() {
  return (

    <>
      <div className="px-8 -mt-8">
        <section class="text-gray-400  body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-10 text-[#65a1d7]">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">About</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Aasha air-conditioner is most trusted and oldest Service Center for Air-conditioners,Fridges,Washing Machines,Gestures and other's electronice items. Aasha air-conditioner Have Expert Team for Repair your Product.Aasha working in repairing since 2010 and make Happy Customers.</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={gas} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">GAS CHARGING</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Gas filling in Air-conditioner</h1>
                    <p class="leading-relaxed">Solve the gas leakege problem and give three months warranty .</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={AcInstall} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1"> Installation</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Window and Splite Ac intall</h1>
                    <p class="leading-relaxed">Install window and Splite Ac with hide piping affordable price .</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={AcService} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Service</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Window and Splite Ac Service</h1>
                    <p class="leading-relaxed">Install window and Splite Ac Service with affordable price .</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={fridgeRep} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">FERIDGE</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Feridge Gas charging and other service</h1>
                    <p class="leading-relaxed">Repaire in all brands Fridges single,double door fridges  .</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={WashRep} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">WASHING MACHING</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Washing machine service </h1>
                    <p class="leading-relaxed">Repaire in all brands washing machine automatic and Semi-automatic .</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={geysur} />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">GEYSER</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Geyser Service</h1>
                    <p class="leading-relaxed">Repaire all brand geysers and Gas or non-gas geysers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>

  )
}
export default About