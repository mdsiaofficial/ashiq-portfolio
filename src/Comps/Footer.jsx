import React from 'react'
import { BiHome, BiLogoBlogger } from 'react-icons/bi'
import ashiqicon from "../assets/ashiq.png";
import { PiXLogoBold } from 'react-icons/pi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { PiYoutubeLogoBold } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className='fixed bottom-0 '>
      <div>
        <div className='flex gap-10 p-3 border-4 rounded-2xl bg-slate-300 opacity-30 duration-200 hover:duration-300 hover:opacity-90'>

          <a href="https://github.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <BiHome className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p>Home</p>
          </a>
          <a href="https://github.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <BiLogoBlogger className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p>My Blogs</p>
          </a>
          <div className=' bg-black w-1'></div>
          <a href="https://github.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiGithubLogoBold className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p>Github</p>
          </a>
          <a href="https://x.com/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiXLogoBold className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />

            <p>X/Twitter</p>
          </a>
          <a href="https://linkedin.com/in/mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiLinkedinLogoBold className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p>LinkedIn</p>
          </a>
          <a href="https://youtube.com/@mdsiaofficial" className='flex flex-col items-center justify-center'>
            <PiYoutubeLogoBold className='border rounded-full hover:bg-blue-200 border-black w-10 h-10 hover:scale-125 hover:transition-all hover:duration-500' />
            <p>Youtube</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

