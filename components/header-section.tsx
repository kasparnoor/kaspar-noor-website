import Nav from './nav'
import React from 'react'
export default function HeaderSection({ setShowMenu, showMenu }: any) {
  console.warn('Show menu header-section.tsx: ' + showMenu)
  return (
    <>
      <header className="fixed z-20 w-full bg-transparent">
        <div className="container flex items-center justify-between px-6 py-5 mx-auto md:py-0">
          <div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`${
                showMenu ? 'hidden' : ''
              } text-white hover:text-light focus:text-light focus:outline-none focus:ring-2 focus:ring-white sm:block md:hidden`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu stroke-white md:hidden"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${showMenu ? '' : 'hidden'} md:block lg:block`}
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`fixed top-0 z-30 mt-6 block text-white hover:text-light focus:text-light focus:outline-none focus:ring-2 focus:ring-white md:hidden lg:hidden`}
              >
                <svg
                  className="stroke-white"
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
            </div>
            <Nav setShowMenu={setShowMenu} showMenu={showMenu} />
          </div>
          <button className="px-4 py-1 text-sm text-white transition duration-150 ease-in-out bg-transparent border border-white rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-8 sm:py-3 lg:text-lg lg:font-bold">
            <p className="font-black">Sign In</p>
          </button>
        </div>
      </header>
    </>
  )
}
