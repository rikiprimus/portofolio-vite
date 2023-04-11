import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/Section/About'
import Contact from '../components/Section/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Section/Hero'
import Portofolio from '../components/Section/Portofolio'
import Skill from '../components/Section/Skill'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='px-4 xl:px-[200px]'>
        <Navbar/>
      </div>
      <div className='px-4 xl:px-[200px]'>
        <Hero/>
        <div className='my-[100px] border border-white/10'></div>
        <About/>
        <Skill/>
        
        
      </div>
      
    </>
  )
}

export default Landing