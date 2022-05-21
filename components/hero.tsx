import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from '../components/Index.module.css'
export default function Hero() {
  const background: any = useRef()

  useEffect(() => {
    //gsap.to(background.current, { rotation: '+=360' })
  })
  return (
    <div className="pb-12 overflow-y-hidden z-2">
      <div ref={background} className={styles.animatedBackground}>
        <div className="container flex flex-col items-center py-10 mx-auto sm:py-24">
          <div className="flex-col items-center justify-center w-11/12 mb-5 sm:mb-10 sm:w-2/3 lg:flex">
            <img
              src="/logo3.svg"
              className="hidden md:block"
              style={{ maxWidth: 300, padding: 20 }}
            ></img>
            <h1 className="text-2xl font-black leading-7 text-center text-white sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl">
              Full stack software engineer from
              <span className="text-light"> the Baltics</span>.
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border border-indigo-700 rounded hover:bg-indigo-600 focus:ring-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
              Résumé
            </button>
            <button className="px-4 py-2 ml-4 text-sm transition duration-150 ease-in-out bg-transparent border rounded hover:border-indigo-600 hover:text-indigo-600 focus:ring-indigo-700 border-light text-light focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
