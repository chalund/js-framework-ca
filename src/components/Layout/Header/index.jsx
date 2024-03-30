import React from 'react'
import Navbar from '../../Nav'
import Logo from '../Logo'


export const Header = () => {
  return (
    <div className='bg-orange-300 sticky top-0 z-[20]'>
      <div className="mx-auto max-w-screen-lg px-4 py-2 flex w-full items-center justify-between flex-wrap">
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}
