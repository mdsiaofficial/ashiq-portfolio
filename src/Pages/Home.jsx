import React from 'react'
import Header from '../Comps/Header'
import About from '../Comps/About'
import Works from '../Comps/Works'
import Education from '../Comps/Education'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

      <Header />
      <About />
      <Works />
      <Education/>
    </div>
  )
}

export default Home