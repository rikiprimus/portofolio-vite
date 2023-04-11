import React from 'react'
import Me from '../../assets/image/me.png'

const About = () => {
  return (
    <div id='about' className='py-8 lg:py-[60px]'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
            <div data-aos="zoom-out">
                <img src={Me} alt='me' className='w-[250px] lg:w-full'/>
            </div>
            <div data-aos="zoom-out" className='flex flex-col gap-4 lg:gap-8'>
                <h1 className='text-green text-xl tracking-widest'>ABOUT ME ?</h1>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h1 className='text-white text-xl font-bold lg:text-4xl tracking-wider'>Halo, Saya Ricky Primus Saputra</h1>
                    <p className='text-sm lg:text-xl'>Saya adalah seorang Junior Web Developer. Saya merupakan Fresh Graduated jurusan Teknik Informatika di Universitas Gunadarma. Saya orang yang sangat suka bidang komputer ataupun coding dan memiliki hobi dalam video editing untuk youtube. Moto saya belajar apapun dan dari siapapun.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About