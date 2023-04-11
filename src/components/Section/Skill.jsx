import React from 'react'
import Html from '../../assets/image/html.png'
import Css from '../../assets/image/css.png'
import Jv from '../../assets/image/javascript.png'
import Tw from '../../assets/image/tailwind.png'
import Bs from '../../assets/image/bootstrap.png'
import Figma from '../../assets/image/figma.png'
import Adobe from '../../assets/image/adobe.png'
import Rc from '../../assets/image/react.png'

import Cardskill from '../Card/Cardskill'

const Skill = () => {
  return (
    <div id='skill' className='py-8 lg:py-[60px]'>
        <div className='flex flex-col items-center gap-8 lg:gap-16'>
            <h1 data-aos="fade-down" className='text-green text-xl tracking-widest'>MY SKILL</h1>
            <h1 data-aos="fade-down" className='text-center text-white text-2xl font-bold lg:text-4xl'>Skill Yang Sejauh Ini Saya Pelajari</h1>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-16'>
                <Cardskill 
                    url='https://id.wikipedia.org/wiki/HTML'
                    imageUrl={Html}
                    title='HTML'
                />
                <Cardskill 
                    url='https://id.wikipedia.org/wiki/Cascading_Style_Sheets'
                    imageUrl={Css}
                    title='CSS'
                />
                <Cardskill 
                    url='https://id.wikipedia.org/wiki/JavaScript'
                    imageUrl={Jv}
                    title='Javascript'
                />
                <Cardskill 
                    url='https://react.dev/'
                    imageUrl={Rc}
                    title='React JS'
                />
                <Cardskill 
                    url='https://tailwindcss.com/'
                    imageUrl={Tw}
                    title='Tailwind CSS'
                />
                <Cardskill 
                    url='https://getbootstrap.com/'
                    imageUrl={Bs}
                    title='Bootstrap'
                />
                <Cardskill 
                    url='https://figma.com/'
                    imageUrl={Figma}
                    title='Figma'
                />
                <Cardskill 
                    url='https://id.wikipedia.org/wiki/Adobe_Premiere_Pro'
                    imageUrl={Adobe}
                    title='Premiere Pro'
                />
            </div>
        </div>
    </div>
  )
}

export default Skill