import React from 'react'

const Cardproject = ({imageUrl, title, tag, url}) => {
  return (
    <div data-aos="zoom-out" className='flex flex-col items-center gap-4 bg-white bg-opacity-10 pb-6 w-full lg:w-[350px] rounded'>
        <img src={imageUrl} alt='' className='w-full h-[300px] rounded-t'/>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-white text-xl font-bold'>{title}</h1>
            <p>{tag}</p>
        </div>
        <a href={url} target="_blank" className='bg-purple py-2 px-8 rounded font-semibold'>Detail</a>
    </div>
  )
}

export default Cardproject