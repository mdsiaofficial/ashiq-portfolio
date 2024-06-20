import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>

      {/* Title */}
      <section className=''>
        <h1 className='text-xl font-semibold
                      md:text-3xl md:font-semibold'>About Me</h1>
      </section>

      <section className=' max-w-[43rem]
      '>
        <p>After admiting myself in BSc in Mathematics in 2018, I lost my pace of study and gaining knowledge. Then I quit myself as a Mathematics student. In 2022 i got admited to CSE in City University. And Here I'm now, back in track to travel in Software Industry</p>
      </section>
    </div>
  )
}

export default About