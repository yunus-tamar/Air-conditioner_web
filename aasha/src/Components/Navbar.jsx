import React from "react";
import { Link } from "react-router-dom"
import log from '../Components/Images/aclog.png';
// import Contact from "../Components/Contact"
function Navbar() {
  return (

    <div className="px-8 py-4">
      <header class="text-[#65a1d7] body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <Link to='/'> <img src={log} alt="none" className=" h-20 w-72" /></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <li className="list-none ml-6 font-semibold hover:text-[#4f8bbf]"><Link to='/'>Home</Link></li>
            <li className="list-none ml-6 font-semibold hover:text-[#4f8bbf]"><Link to='/Service'>Services</Link></li>
            <li className="list-none ml-6 font-semibold hover:text-[#4f8bbf]"><Link to='/About'>About</Link></li>
            <li className="list-none mx-6 font-semibold hover:text-[#4f8bbf]"><Link to='/Contact'>Contact</Link></li>
          </nav>
          <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-[#65a1d7] hover:text-white rounded text-base mt-4 md:mt-0"><Link to='/Contact'>Contact us</Link>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* //className="mr-5 hover:text-gray-900" */}
    </div>
  )
}
export default Navbar