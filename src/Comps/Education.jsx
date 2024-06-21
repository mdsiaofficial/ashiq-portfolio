import React from 'react'
import data from '../assets/data.json'
const Education = () => {
  const { education } = data[0]; // Corrected to get education from the first object in the data array
  return (
    <div className='flex flex-col my-10 md:w-[42rem]'>

      {/* Title */}
      <section className='text-center max-w-[43rem]'>
        <h1 className='text-xl font-semibold
                      md:text-3xl md:font-semibold'>Education</h1>
      </section>

      <section className=' my-3 flex flex-col gap-8'>
        {
          education.map((edu, index) => (
            <div key={index} className=' flex justify-between items-center gap-5'> 
              <div className='flex flex-col'>
                <h1  className='text-base italic md:text-lg lg2:text-xl text-[#bd3053]'>{edu.program}</h1>
                <h1 className='text-xl '>{edu.uni}</h1>
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