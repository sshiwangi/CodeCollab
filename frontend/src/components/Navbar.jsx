import React from 'react'
import Avatar from './Avatar'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Search from './Search'

function Navbar({toggleDrawer}) {
  return (
    <div className="navbar h-1/4 bg-base-100 shadow-md justify-between">
      <div className="navbar-start">
        <button
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <Search />
      </div>
      <div className="navbar-end">
        <div className='flex items-center'>
        <BellIcon className="h-6 w-6 mr-4" aria-hidden="true" />
        <Avatar />
        </div>
        {/* <button className="btn btn-ghost btn-circle">
          
        </button>
        <button className="btn btn-ghost btn-circle">
         
        </button> */}
      </div>
    </div>
  )
}

export default Navbar