import React from 'react'
import Figma from '../../assets/image/figma.png'
import Coding from '../../assets/image/coding.png'
import Evideo from '../../assets/image/video-editing.png'
import Cardhero from '../Card/Cardhero'

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  return (
    <div id="hero" className='py-8 lg:py-[60px] lg:my-24 lg:px-[10px];'>
      <div className='flex flex-col text-center gap-8 lg:gap-16'>
        <p className='text-green text-xl tracking-widest'>Im Junior Front-end Web Developer</p>
        <div className='flex flex-col gap-4'>
          <h1 className='text-white text-4xl font-bold tracking-wider'>What Can I Do ?</h1>
          <h1 className='text-white text-4xl font-bold'>
            <Typewriter
              cursor
              cursorColor='#16FCD2'
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={50}
              loop={0}
              typeSpeed={100}
              words={[
                'Design',
                'Front-end Web Develop',
                'Video Editor',
            ]}/>
          </h1>
        </div>
        <p className='text-xl md:px-[100px] lg:px-[150px]'>Saya sangat tertarik dalam dunia web development. Saat ini saya sedang menekuni web development khususnya bagian front-end web.
          Saya juga memiliki skill video editing menggunakan adobe premiere.
        </p>
        <div className='flex flex-row justify-center text-white gap-4'>
          <a href='_blank' className='bg-purple px-8 py-2 rounded hover:brightness-50'>Kirim Email</a>
          <a href='_blank' className='bg-white bg-opacity-10 px-12 py-2 rounded hover:brightness-50'>My CV</a>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <Cardhero 
            url='https://www.figma.com/'
            imageUrl ={Figma}
            title = 'Design'
            body = 'Desain UI website menggunakan tool Figma. Figma adalah tool desain berupa website ataupun aplikasi, dimana tool ini berbasis vector, sehingga akan lebih cocok untuk mendesain UI website atau mobile dan aset ilustrasi.'
          />
          <Cardhero 
            url='https://github.com/rikiprimus?tab=repositories'
            imageUrl ={Coding}
            title = 'Front-end Web'
            body = 'Implementasi desain UI dalam bentuk website dengan tool Visual Studio Code. Saat ini saya sedang mengembangkan kemampuan saya dibidang Front-end web dimana saya menggunakan library ReactJS.'
          />
          <Cardhero 
            url='https://www.youtube.com/@silucky'
            imageUrl ={Evideo}
            title = 'Video Editing'
            body = 'Video editing menggunakan tool Adobe Premiere. Selain dalam bidang programming saya juga memiliki kemampuan video editing. Skill ini biasa saya gunakan untuk hobi saya yaitu mengedit video-video untuk youtube.'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero