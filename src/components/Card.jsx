import React from 'react'

const Card = ({title,description,link,image}) => {
  return (
    <>

<div className='p-3 md:p-6 flex flex-col w-80  shadow-xl rounded-2xl '>
           <a 
          href={link}   
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 text-center "
        >
          {title}
        </a>
        <img src={image} alt="" className='w-72 h-44 mt-3'/>
<p className='px-4 text-md md:text-md py-2 text-justify'>{description}</p>
</div>
    </>
  )
}

export default Card
