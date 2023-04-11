import React from 'react'

import Cardcontact from '../Card/Cardcontact';

import Pin from '../../assets/image/pin.png';
import Wa from '../../assets/image/wa.png';
import Mail from '../../assets/image/mail.png';
import Linked from '../../assets/image/linkedin.png';

const Contact = () => {
  return (
    <div id='contact' className='py-8 lg:py-[60px]'>
        <div className='flex flex-col items-center gap-16'>
            <h1 data-aos="fade-down" className='text-green text-xl tracking-widest'>Contact</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
                <Cardcontact
                    imageUrl={Pin}
                    title='Alamat'
                    body='Jalan Tanah Koja 2, Jakarta Timur, Jakarta'
                />
                <Cardcontact
                    imageUrl={Wa}
                    title='Telepon'
                    body='Tidak tersedia'
                />
                <Cardcontact
                    imageUrl={Mail}
                    title='Email'
                    body='rikiprimus33@gmail.com'
                />
                <Cardcontact
                    imageUrl={Linked}
                    title='Linkedin'
                    body='https://www.linkedin.com/in/ricky-primus-saputra-1348ba25b/'
                />
            </div>
        </div>
    </div>
  )
}

export default Contact