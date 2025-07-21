import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const NotsCard = ({ note }) => {
  
  return (
    <div className='border w-[20vw] flex flex-col border-blue-900/90 shadow-blue-600/50 shadow-sm m-3 p-3 rounded'>
      <div className='flex justify-between items-center'>
        <p>{note.title}</p>
        <CiBookmark />
      </div>
      <div>
        <p>{note.text.slice(0.2)+"..."}</p>
      <IoArchiveOutline />
      <MdDeleteOutline/>
      </div>
    </div>
  )
}

export default NotsCard;