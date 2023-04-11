import React from 'react'
import Thumb1 from '../../assets/image/thumb-portofolio.png'
import Thumb2 from '../../assets/image/thumb-dashboard.png'
import Thumb3 from '../../assets/image/thumb-react-portofolio.png'
import Cardproject from '../Card/Cardproject'

const Portofoliio = () => {
  return (
    <div id='portofolio' className='py-8 lg:py-[60px]'>
        <div className='flex flex-col items-center gap-8 lg:gap-16'>
            <h1 data-aos="fade-down" className='text-green text-xl tracking-widest'>PORTOFOLIO</h1>
            <h1 data-aos="fade-down" className='text-center text-white text-2xl font-bold font-bold'>Karya Yang Sudah Pernah Saya Buat</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                <Cardproject 
                    imageUrl={Thumb1}
                    title='Portofolio with Tailwind'
                    tag='HTML, TailwindCSS, Javascript'
                    url='https://www.linkedin.com/'
                />
                <Cardproject 
                    imageUrl={Thumb2}
                    title="Dashboard Al'Steam"
                    tag='HTML, TailwindCSS, Javascript'
                    url='https://www.linkedin.com/'
                />
                <Cardproject 
                    imageUrl={Thumb3}
                    title="Dashboard Al'Steam"
                    tag='HTML, TailwindCSS, Javascript'
                    url='https://www.linkedin.com/'
                />
            </div>
        </div>
    </div>
  )
}

export default Portofoliio