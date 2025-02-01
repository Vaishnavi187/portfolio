import React from 'react'

const Home = () => {
  return (
    <>
  
       <section   className='text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20'>
        <div className=' w-full md:w-1/2  mt:12   '>
       <h1 className='text-3xl md:text-5xl font-bold'> Hello,my name is Vaishnavi Singh </h1> <br />
       <h3 className='text-2xl md:text-3xl '>I am A <span className='font-bold'>Full Stack Developer</span></h3> <br />
        <p className='text-sm md:text-2xl text-justify'> I am a skilled ,passionate and eager to learn full stack developer.I build responsive and user-friendly websites and applications. Although I’m just starting my career, I’m excited to grow my skills, solve problems, and contribute to real-world projects.</p>
       </div>
        <div className=' w-full md:w-1/2 mt-8 md:mt-0' > 
        <img src="pic.webp" alt=""  className='w-full  mx-auto md:ml-16 rounded-lg shadow-lg'/>
        </div>
    </section>
     
    </>
  )
}

export default Home
