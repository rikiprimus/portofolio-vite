import React from 'react'

const Cardskill = ({url, imageUrl, title}) => {
  return (
    <div data-aos="zoom-out">
      <a href={url} target='_blank' rel="noreferrer noopener">
        <div className='flex flex-row items-center content-start lg:gap-6 bg-white bg-opacity-10 py-2 px-4 lg:px-8 w-[170px] lg:w-[350px] rounded hover:bg-opacity-5'>
          <div className='bg-white bg-opacity-5 p-2 w-12'>
            <img src={imageUrl} alt='figma' className='h-8 w-full'/>
          </div>
          <p className='lg:text-xl'>{title}</p>
        </div>
      </a>
    </div>
  )
}

export default Cardskill