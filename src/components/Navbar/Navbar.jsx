import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdViewHeadline, MdClose, MdExpandMore} from "react-icons/md";

import L from "../../assets/image/L.png"

const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full flex items-center justify-center bg-dark h-24 font-noto'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div>
          <img src={L} className="w-12"/>
        </div>
        <div>
          <ul className='hidden flex-row md:gap-4 lg:gap-8 md:flex'>
            <li><a href='#home' className='px-8 py-4 hover:font-bold'>Home</a></li>
            <li><a href='#skill' className='px-8 py-4 hover:font-bold'>Skill</a></li>
            <li><a href='#portofolio' className='px-8 py-4 hover:font-bold'>Projects</a></li>
            <li><a href='#about' className='px-8 py-4 hover:font-bold'>About</a></li>
            <li><a href='#contact' className='px-8 py-4 hover:font-bold'>Contact</a></li>
          </ul>
        </div>
        <div>
          <a href='#mycv' className='hidden bg-white bg-opacity-10 rounded shadow-black text-white px-9 py-2.5 md:block hover:brightness-50'>My CV</a>
        </div>
      </div>

      <div onClick={handleNav} className='block cursor-pointer md:hidden'>
        {!nav ? <MdClose className='text-white' size={30}/> : <MdViewHeadline className='text-white' size={30}/>}
      </div>

      <div className={!nav ? 'fixed flex flex-col items-center p-4 right-0 top-24 w-[100%] bg-dark h-full border border-black ease-in-out duration-300 z-10 md:hidden': 'fixed right-[-100%]'}>
        <div className='text-center bg-white bg-opacity-10 rounded w-[40%] shadow-black px-2 py-2.5'>
          <a href='#mycv'>My CV</a>
        </div>
        <ul className='w-full flex flex-col py-6 px-4'>
          <li><a href="#home">Home</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#portofolio">Project</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar