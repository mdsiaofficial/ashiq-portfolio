import React from 'react'
import data from "../assets/data.json"

const About = () => {
  const { basicInfo } = data[0]; // Destructure to get basicInfo from the first object in the data array

  return (
    <div className='flex flex-col justify-center items-center my-10'>

      {/* Title */}
      <section className=''>
        <h1 className='text-xl font-semibold
                      md:text-3xl md:font-semibold'>About Me</h1>
      </section>

      <section className='max-w-[43rem]'>
        <p>{basicInfo.about}</p>
      </section>
    </div>
  )
}

export default About