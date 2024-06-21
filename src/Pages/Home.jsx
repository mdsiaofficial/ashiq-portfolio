import React from 'react'
import Header from '../Comps/Header'
import About from '../Comps/About'
import Works from '../Comps/Works'
import Education from '../Comps/Education'
import WorkExperience from '../Comps/WorkExperience'
import Projects from '../Comps/Project'
import Footer from '../Comps/Footer'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

      <Header />
      <About />
      {/* <Works /> */}
      <Projects/>
      <WorkExperience/>
      <Education />
      <Footer/>
    </div>
  )
}

export default Home