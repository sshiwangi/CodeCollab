import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SidebarDrawer from '../components/SidebarDrawer'

function Dashboard() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className=' flex w-full '>
      {isLargeScreen ? (
        <>
          {/* Large Screen: Show SidebarDrawer */}
          <SidebarDrawer />
          <Navbar />
        </>
      ) : (
        <>
          {/* Small/Medium Screen: Show Navbar with button */}
          <Navbar onToggleDrawer={toggleDrawer} />
          {/* Content goes here */}
          {isDrawerOpen && <SidebarDrawer />}
        </>
      )}
    </div>
  )
}

export default Dashboard