import React from 'react'

const Cardcontact = ({imageUrl, title, body}) => {
  return (
    <div data-aos="zoom-out" className='flex flex-col bg-white bg-opacity-10 rounded h-full m-4 p-8 gap-4 hover:bg-opacity-5'>
        <div className='items-center bg-white bg-opacity-5 p-2 w-12 lg:w-20'>
            <img src={imageUrl} alt='' className='h-8 lg:h-16'/>
        </div>
        <h1 className='text-white text-xl font-semibold'>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Cardcontact