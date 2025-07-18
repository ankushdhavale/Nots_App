import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';

const Home = () => {
  const [text, setText] = useState();
  const [title, setTitle] = useState();
  console.log(text);
  
  return (
    <div className='flex gap-3'>
      <SideBar />
      <div className='flex flex-col items-center w-[90%] mt-4 gap-1'>
        <input onChange={(e)=>setTitle(e.target.value)} className='w-[40%] py-2 px-3 border border-slate-500/50 rounded outline-none text-xl' type="text" placeholder='Title'/>
        <textarea onChange={(e)=>setText(e.target.value)} className='w-[40%] h-[40%] p-3 border-slate-500/50 rounded outline-none resize-none' name="" id="" placeholder='Start typing'></textarea>
      </div>
    </div>
  )
}

export default Home;