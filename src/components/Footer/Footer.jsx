import React from 'react'

import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex flex-col items-center text-center text-sm lg:text-base w-full bg-white bg-opacity-10 p-4'>
        <div className='flex flex-row items-center text-center'>
            <MdCopyright/>
            <p>Copyright <a href='http://rickyprimussaputra.com/' className='font-semibold hover:text-green'>Ricky Primus Saputra</a>. All Rights Reserved</p>
        </div>
        <p>Designed by <a href='http://rickyprimussaputra.com/' className='font-semibold hover:text-green'>Ricky Primus Saputra</a></p>
    </div>
  )
}

export default Footer