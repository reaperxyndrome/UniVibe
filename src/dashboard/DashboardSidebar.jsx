// import React from 'react';
import PropTypes from 'prop-types';

// Defining all of DashboardSidebar components
function SideLink({href, name}){
  return(
    // This is to create an anchor tag that links to the href with the name as the text
    <a href={href} className='hover:bg-white hover:text-black pl-3 py-3 font-semibold'>{name}</a>
  )
}

// Defining the prop types for the SideLink components
SideLink.propTypes = {
   // The href prop is required and should be a string
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Defining the DashboardSidebar components
function DashboardSidebar() {
  return (
    // Contains all the elements of the sidebar
    <div className="h-screen w-48 bg-gray-800 text-white">
      {/* This is an element that contains the navigation links */}
      <nav className="flex flex-col text-xl">
        {/* The SideLink component is used to create navigation links */}
        <SideLink href="/dashboard" name="Dashboard"></SideLink>
        <SideLink href="/dashboard/communities" name="Communities"></SideLink>
        <SideLink href="/dashboard/hangout" name="Hangout"></SideLink>
        <SideLink href="/dashboard/friends" name="Friends"></SideLink>
      </nav>
    </div>
  );
}

export default DashboardSidebar;