// import React from 'react';
import PropTypes from 'prop-types';

function SideLink({href, name}){
  return(
    <a href={href} className='hover:bg-white hover:text-black pl-3 py-3 font-semibold'>{name}</a>
  )
}

SideLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function DashboardSidebar() {
  return (
    <div className="h-screen w-48 bg-gray-800 text-white">
      
      <nav className="flex flex-col text-xl">
        <SideLink href="/dashboard" name="Dashboard"></SideLink>
        <SideLink href="/dashboard/communities" name="Communities"></SideLink>
        <SideLink href="/dashboard/hangout" name="Hangout"></SideLink>
        {/* <SideLink href="/dashboard/friends" name="Friends"></SideLink> */}
        <SideLink href="/dashboard/generalchat" name="General Chat"></SideLink>
      </nav>
    </div>
  );
}

export default DashboardSidebar;