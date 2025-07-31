import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const NotsCard = ({ note }) => {
	return (
		<div className='border w-[20vw] flex flex-col  border-blue-900/90 shadow-blue-600/50 shadow-sm m-3 p-3 rounded'>
			<div className='flex justify-between items-center border-b border-gray-600 mb-2 pb-2'>
				<p className='text-xl'>{note.title}</p>
				<CiBookmark size={22} className=" cursor-pointer"/>
			</div>
			<div className="flex items-center justify-between gap-2">
				<p className='text-gray-500'>{note.text.slice(0.2) + "..."}</p>
				<div className="flex flex-col gap-1">
					<IoArchiveOutline onClick={console.log("hello")} size={19} className=" cursor-pointer"/>
					<MdDeleteOutline size={22} className=" cursor-pointer"/>
				</div>
			</div>
		</div>
	);
};

export default NotsCard;
