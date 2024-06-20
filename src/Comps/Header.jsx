import React from 'react'
import ashiqicon from "../assets/ashiq.png";
const Header = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <nav className='flex justify-center items-center'>

        {/* title info */}
        <section className='flex flex-col gap-3'>
          <h1 className=' text-4xl font-bold
                        md:text-6xl md:font-extrabold'>
            Hi, I'm {`Ashiq`} 👋</h1>
          <h2 className='text-base font-semibold
                      md:text-2xl md:font-semibold'>
            Competitive Programmer</h2>
          <h2 className='text-base font-semibold
                      md:text-2xl md:font-semibold'>
            MERN Stack</h2>
          <h2 className='text-base font-semibold
                      md:text-2xl md:font-semibold'>
            Operating System Enthusiastic</h2>
        </section>

        {/* picture or logo */}
        <section className=''>
          <img src={ashiqicon} alt="Ashiq" className='w-[8rem] md:w-[14rem] h-auto rounded-full border-2' />
        </section>
      </nav>
      <p className='text-base
                      md:text-base'><q>
        I love to solve problem's and analytical thinking</q></p>
    </div>
  )
}

export default Header