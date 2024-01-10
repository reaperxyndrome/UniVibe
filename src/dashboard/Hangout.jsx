// import * as React from "react";
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import HangoutModal from './HangoutModal';
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";

const HangoutCard = () => {
  return(
    <div className="flex-col fill-gray-800 overflow-hidden relative flex w-[480px] h-fit items-stretch mt-3 pl-3.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7d28693f13d9f21c26489d01ef02051bc44cc21475fbe70f7f1a8f83e36d23?apiKey=b1110ce74f26469f8c7944650aef6c79&"
        className="absolute h-full w-full object-cover object-center inset-0"
        />
      <div className="relative flex justify-between gap-5 px-0.5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-white text-base font-bold">Nobar</div>
          <div className="text-neutral-300 text-xs font-medium whitespace-nowrap mt-2">
            Due Date
          </div>
          <div className="text-white text-xs font-semibold">
            10 Oktober, 2023
          </div>
        </div>
        <div className="flex basis-[0%] flex-col items-stretch mt-7 self-end">
          <div className="text-neutral-300 text-xs font-medium whitespace-nowrap">
            Time
          </div>
          <div className="text-white text-xs font-semibold whitespace-nowrap">
            13.45
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end">
          <div className="text-neutral-300 text-xs font-medium">
            Location
          </div>
          <div className="text-white text-xs font-semibold">
            Mall Grand Indonesia
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/885461b625bfd55a917007c4e9ef65393660c72876d4ab17df5e4f2897c584ae?apiKey=b1110ce74f26469f8c7944650aef6c79&"
          className="aspect-[3.07] object-contain object-center w-[89px] overflow-hidden self-center shrink-0 max-w-full"
          />
      </div>
      <div className="relative text-white text-xs font-medium bg-orange-500 justify-center mt-1.5 pl-5 pr-16 py-2.5 rounded-2xl items-start max-md:max-w-full max-md:pr-5">
        film the creator jam 13.45
      </div>
    </div>

  )
}

export default function Hangout() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    return (
      <div className="flex flex-col">
        <DashboardNavbar></DashboardNavbar>
        
        <div className="flex">
          <DashboardSidebar></DashboardSidebar>
          <div className='flex flex-col w-full items-center'>
            <h1 className='text-2xl font-bold'>Notification</h1>
            <HangoutCard></HangoutCard>
            <HangoutCard></HangoutCard>
            <HangoutCard></HangoutCard>
            <HangoutCard></HangoutCard>
            <button className="rounded-md focus:outline-none text-white text-base md:text-xl px-4 py-3 md:px-6 md:py-4 mx-auto mt-2 bg-blue-800 cursor-pointer" onClick={handleShowModal}>Create Host</button>
            <HangoutModal show={showModal} onHide={handleCloseModal} />
        
          </div>
          
          {/* <Hangoutlist></Hangoutlist> */}
          
          {/* Host button that navigates to the Meeting */}
          {/* <Link to="/dashboard/HangoutModal">
            <div
            className="text-white text-center text-xs font-bold tracking-wider uppercase whitespace-nowrap bg-blue-600 justify-center items-stretch mt-10 px-10 py-4 rounded-3xl max-md:px-5 cursor-pointer"
            onClick={handleShowModal} // Show the modal when this button is clicked
            > 
            Host
            </div>
          </Link> */}

          {/* Render the HangoutModal component and pass the show prop */}
          
        </div>
        <Footer></Footer>
        </div>
      );
    }    

