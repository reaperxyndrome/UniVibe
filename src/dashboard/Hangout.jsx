// import * as React from "react";
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import HangoutModal from './HangoutModal';
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";

export default function Hangout() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

    return (
      <div>
        <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
          <DashboardNavbar></DashboardNavbar>
          <DashboardSidebar></DashboardSidebar>
        <div className="items-center bg-white flex max-w-[1217px] flex-col justify-center mx-auto w-50 pt-20">
          <div className="flex w-[522px] max-w-full flex-col items-center">
            {/* box 1 */}
            <div className="flex-col fill-gray-800 overflow-hidden relative flex min-h-[99px] w-full items-stretch mt-3 pl-3.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
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
                  <div className="text-white text-xs font-semibold mt-2.5">
                    10 Oktober, 2023
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch mt-7 self-end">
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap">
                    Time
                  </div>
                  <div className="text-white text-xs font-semibold whitespace-nowrap mt-2.5">
                    13.45
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end">
                  <div className="text-neutral-300 text-xs font-medium">
                    Location
                  </div>
                  <div className="text-white text-xs font-semibold mt-2.5">
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

            {/* box 2 */}
            <div className="flex-col fill-gray-800 overflow-hidden relative flex min-h-[99px] w-full items-stretch mt-3 pl-3.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7d28693f13d9f21c26489d01ef02051bc44cc21475fbe70f7f1a8f83e36d23?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                className="absolute h-full w-full object-cover object-center inset-0"              />
              <div className="relative flex justify-between gap-5 px-0.5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-white text-base font-bold">Basket kuyy</div>
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap mt-2">
                    Due Date
                  </div>
                  <div className="text-white text-xs font-semibold mt-2.5">
                    13 Oktober, 2023
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch mt-7 self-end">
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap">
                    Time
                  </div>
                  <div className="text-white text-xs font-semibold whitespace-nowrap mt-2.5">
                    12.10
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end">
                  <div className="text-neutral-300 text-xs font-medium">
                    Location
                  </div>
                  <div className="text-white text-xs font-semibold mt-2.5">
                    Fx Sudirman
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/885461b625bfd55a917007c4e9ef65393660c72876d4ab17df5e4f2897c584ae?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                  className="aspect-[3.07] object-contain object-center w-[89px] overflow-hidden self-center shrink-0 max-w-full"                />
              </div>
              <div className="relative text-white text-xs font-medium bg-orange-500 justify-center mt-1.5 pl-5 pr-16 py-2.5 rounded-2xl items-start max-md:max-w-full max-md:pr-5">
                CGV court
              </div>
            </div>

            {/* box 3 */}
            <div className="flex-col fill-gray-800 overflow-hidden relative flex min-h-[99px] w-full items-stretch mt-3.5 pl-2.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7d28693f13d9f21c26489d01ef02051bc44cc21475fbe70f7f1a8f83e36d23?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                className="absolute h-full w-full object-cover object-center inset-0"
                />
              <div className="relative flex items-start justify-between gap-5 pr-1.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="text-white text-base font-bold">Mabar</div>
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap mt-3">
                    Due Date
                  </div>
                  <div className="text-white text-xs font-semibold mt-2.5">
                    21 Oktober, 2023
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch mt-7 self-end">
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap">
                    Time
                  </div>
                  <div className="text-white text-xs font-semibold whitespace-nowrap mt-2.5">
                    19.00
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end">
                  <div className="text-neutral-300 text-xs font-medium">
                    Location
                  </div>
                  <div className="text-white text-xs font-semibold mt-2.5">
                    Online
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/301d6c91b39fad986d822a95a1e27987d020af401f20beac9ee11f2f88b4f7b7?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                  className="aspect-[3.07] object-contain object-center w-[89px] overflow-hidden self-center shrink-0 max-w-full"
                  />
              </div>
              <div className="relative text-white text-xs font-medium bg-orange-500 justify-center mt-1.5 pl-5 pr-16 py-2.5 rounded-2xl items-start max-md:max-w-full max-md:pr-5">
                MPLS sabtu
              </div>
            </div>
            
            {/* Host button that navigates to the Meeting */}
            {/* <Link to="/dashboard/HangoutModal">
              <div
              className="text-white text-center text-xs font-bold tracking-wider uppercase whitespace-nowrap bg-blue-600 justify-center items-stretch mt-10 px-10 py-4 rounded-3xl max-md:px-5 cursor-pointer"
              onClick={handleShowModal} // Show the modal when this button is clicked
              > 
              Host
              </div>
            </Link> */}

            <button onClick={handleShowModal}>Create Host</button>
            {/* Render the HangoutModal component and pass the show prop */}
            <HangoutModal show={showModal} onHide={handleCloseModal} />
          </div>
        </div>
        <Footer></Footer>
        </div>
      </div>
      );
    }    

