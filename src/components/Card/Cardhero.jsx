import React from 'react'

const Cardhero = ({url, imageUrl, title, body}) => {
  return (
    <div>
        <a href={url} target='_blank' rel="noreferrer noopener">
            <div className='flex flex-col text-start bg-white bg-opacity-10 rounded h-full m-4 p-8 gap-4 lg:m-0 lg:h-[] hover:bg-opacity-5'>
              <div className='bg-white bg-opacity-5 p-2 w-12'>
                <img src={imageUrl} alt='' className='h-8'/>
              </div>
              <h1 className='text-white text-xl font-semibold'>{title}</h1>
              <p className='text-sm lg:text-base'>{body}</p>
            </div>
        </a>
    </div>
  )
}

export default Cardhero