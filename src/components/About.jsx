import React from 'react'

const skill=[
  
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Node.js",
   "Express.js",
   "MongoDB",
   "Mongoose",
   "RESTful API's",
   "Tailwind CSS",
   "Git",

]
const About = () => {
  return (
    <>
      <section id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-lg mx-0 md:mx-20 rounded-lg p-10 bg-g2adient-to-r from-gray-900 to-gray-700 animate-pulse '>
        <div>
          <h2 className='text-2xl md:text-4xl font-bold text-center underline '>About</h2>
          
            <p className='mt-5 text-lg text-justify'> I specialize in building dynamic, responsive, and scalable web applications. From designing intuitive front-end interfaces with React to developing efficient back-end services with Node.js and Express, I love bringing ideas to life through code.I continuously learn and explore  new technologies to improve my skill set and stay updated with industry trends.</p>
            </div>
            <div >
              <h3 className='text-xl md:text-2xl font-bold text-center mt-4 underline'> My Skills</h3>
              <ul className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
        {skill.map((skills, index) => (
          <li  className='inline-block p-4 mt-4  rounded-5 font-bold text-lg md:text-xl ' key={index}>{skills}</li>
        ))}
      </ul>
            </div>

        
       

      </section>
    </>
  )
}

export default About
