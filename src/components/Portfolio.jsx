import React from 'react'
import Card from './Card'

const Portfolio = () => {
  const project = [
    {
      
      title: 'Blogging-App',
      image:"blog.webp",
      description: 'Designed and implemented a Full-stack social media platform where user can register, create profile,and post content.Build frontend using React with Responsive Design and developed backend using Node.js ,Express.js with RESTful APIs architecture.Used Mongoose to model andd interact with MongoDB.',
      link: 'https://blog-front-alpha-one.vercel.app/',
    },
    {
      title: 'Book store',
      image:"book.jpeg",
      description: 'Developed a web application using a MERN stack.Designed a user friendly interface with React and Tailwind CSS. Build a RESTfulAPI with Node.js and Express.js to handle book data operations.Stored and managed book details in MonoDB ,ensuring efficient Data retrieval and scalability.',
      link: 'https://books-gamma-peach.vercel.app/',
    },
    {
      title: 'Recipe app',
      image:"recipe.jpeg",
      description: 'Created a recipe app using The MealDbB API to fetch and display recipes.Focused on react  for a dynamic  content rendering and API integration.',
      link: 'https://recipe-project-rust.vercel.app',
    },
    {
      title: 'Weather  app',
      image:"weather.webp",
      description: 'Built a weather application usin Open-Weather Api and Tailwind CSS to display real-time weather data. Utilized React components-based Development and Fetch API for API integration.',
      link: 'https://weather-app-taupe-chi-83.vercel.app/',
    },
    {
      title: ' Calculator ',
      image:"calc.jpeg",
      description: 'Built a fully functional web-based calculator using HTML , CSS and JavaScript. Implemented core arithmectic operations (addition , substraction , multiplication and division .',
      link: 'https://calc-43h2xkmyj-vaishnavi-singhs-projects-91a182a2.vercel.app/',
    },
    {
      title: ' Quiz Application',
      image:"quiz.webp",
      description: 'A dynamic quiz application built with Reactjs and Tailwind CSS featuring an engaging UI. It has multiple choice questions and give instant feedback on your answer.',
      link: 'https://quiz-three-roan.vercel.app/',
    },
  ]
  return (
    <>
    <section className=' mt-10 text-white' id='portfolio'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center underline'>My Projects</h1>
      <div className="container mx-auto  p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {project.map((projects, index) => (
        <Card 
          key={index}
          image={projects.image}
          title={projects.title}
          description={projects.description}
          link={projects.link}
        
        />
      ))}
    </div>

    </section>
      
    </>
  )
}

export default Portfolio
