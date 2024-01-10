// import * as React from "react";
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import HangoutModal from './HangoutModal';
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import Footer from "../Footer";
import Cookies from "js-cookie";

import PropTypes from 'prop-types';
import { useEffect } from "react";

const HangoutCard = ({id, title="Nobar", desc="Movie night", date="25 Januari, 2024"}) => {
  // Component code here
  HangoutCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  async function deleteHangout(hangoutId) {
    try {
        const response = await fetch(`http://localhost:8096/api/v1/schedule/delete/${hangoutId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const scheduleData = await response;
        console.log('Delete hangout successful:', scheduleData);
        // return scheduleData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
  }

  return(
    <div className="flex-col fill-gray-800 overflow-hidden relative flex w-[480px] h-fit items-stretch mt-3 pl-3.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7d28693f13d9f21c26489d01ef02051bc44cc21475fbe70f7f1a8f83e36d23?apiKey=b1110ce74f26469f8c7944650aef6c79&"
        className="absolute h-full w-full object-cover object-center inset-0"
        />
      <div className="relative flex justify-between gap-5 px-0.5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-white text-base font-bold">{title}</div>
          <div className="text-neutral-300 text-xs font-medium whitespace-nowrap mt-2">
            Due Date
          </div>
          <div className="text-white text-xs font-semibold">
            {date}
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
      </div>
      <div className="relative text-white text-xs font-medium bg-orange-500 justify-center mt-1.5 pl-5 pr-16 py-2.5 rounded-2xl items-start max-md:max-w-full max-md:pr-5">
        {desc}
      </div>
      <button className='z-10 absolute right-5 top-2' onClick={() => deleteHangout(id)}>❌</button>
    </div>

  )
}

async function getSchedules(userId) {
  try {
      const response = await fetch(`http://localhost:8096/api/v1/schedule/user/${userId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      });
      const scheduleData = await response.json();
      console.log('Success:', scheduleData);
      return scheduleData;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}



async function fetchUserId(username) {
  try {
      const response = await fetch(`http://localhost:8094/api/v1/user/by-usernames?usernames=${username}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
      });
      const data = await response.json();
      const userId = data[0].id;
      console.log('Success:', userId);
      return userId;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}

const GetCookie = async () => {
  try {
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    const username  = Cookies.get("username");
    const cookie = {token, role, username};
    console.log(cookie)
    const userId = await fetchUserId(username);
    console.log(userId)
    return {cookie, userId};
  } catch (error) {
      console.error('Error:', error);
  }
}

export default function Hangout() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // const [userId, setUserId] = useState('')
  const [scheduleData, setScheduleData] = useState([])
  
  useEffect(() => {
    const getScheduleDataServer = async () => {
      try {
        const username = Cookies.get("username");
        const userId = await fetchUserId(username);
        const scheduleData = await getSchedules(userId);
        setScheduleData(scheduleData);
        console.log(scheduleData)
        // setUserId(userId);
      } catch (error) {
          console.error('Error:', error);
      }
    }
    getScheduleDataServer()
    
    // getSchedules(userId).then(scheduleData => setScheduleData(scheduleData));
    // console.log(scheduleData)
  }, [])

  // const userId = GetUserIdFromCookie().then(userId => userId);
  // console.log(userId)
  // const scheduleData = getSchedules(userId).then(scheduleData => scheduleData);
  // console.log(scheduleData)

  return (
    <div className="flex flex-col">
      <DashboardNavbar></DashboardNavbar>
      
      <div className="flex">
        <DashboardSidebar></DashboardSidebar>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-2xl font-bold'>Meet Up</h1>
          {scheduleData.map((schedule) => (
            <HangoutCard key={schedule.id} id={schedule.id} title={schedule.title} desc={schedule.description} date={schedule.endAt}></HangoutCard>
          ))}
          <button className="rounded-md focus:outline-none text-white text-base md:text-xl px-4 py-3 md:px-6 md:py-4 mx-auto mt-2 bg-blue-800 cursor-pointer" onClick={handleShowModal}>Create Host</button>
          <button onClick={GetCookie}>get cookie</button>
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

