import React, {useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Section/Hero'
import About from '../components/Section/About';
import Skill from '../components/Section/Skill'
import Portofolio from '../components/Section/Portofolio'
import Contact from '../components/Section/Contact'
import Footer from '../components/Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        <div className='px-4 xl:px-[200px]'>
            <Navbar/>
            <Hero/>
            <div className='my-[100px] border border-white/10'/>
            <About/>
            <Skill/>
            <div className='my-[100px] border border-white/10'/>
            <Portofolio/>
            <div className='my-[100px] border border-white/10'/>
            <Contact/>
        </div>
        <Footer/>
    </>
  )
}

export default Home