import React from 'react'
import data from '../assets/data.json'
const Education = () => {
  const { education } = data[0]; // Corrected to get education from the first object in the data array
  return (
    <div className='flex flex-col justify-between my-10 max-w-[43rem]'>

      {/* Title */}
      <section className='text-center'>
        <h1 className='text-xl font-semibold
                      md:text-3xl md:font-semibold'>Education</h1>
      </section>

      <section className='max-w-[43rem] flex flex-col gap-8'>
        {
          education.map((edu, index) => (
            <div key={index} className='flex justify-between gap-5'> 
              <div className='flex flex-col'>
                <h1 className='text-xl '>{edu.uni}</h1>
                <p  className='text-xl'>{edu.program}</p>
              </div>
              <div>
                <p>{edu.year}</p>
              </div>
            </div> 
          ))
        }
      </section>
    </div>
  )
}

export default Education