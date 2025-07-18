import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHome, IoArchiveOutline } from "react-icons/io5";
import { MdLabelImportant } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const SideBar = () => {
  const getStyles = ({ isActive }) => {
    const style = 'flex items-center gap-3 px-2 py-1 rounded rounded-tr rounded-br border border-gray-500/50'
		return isActive
			? `bg-blue-600/50 ${style}`
			: `hover:bg-blue-600/50 text-slate-300/50 bg-grey-800 ${style} transition-colors duration-400 `;
	};
	return (
		<aside className='flex flex-col text-xl gap-3 w-[16%] p-3 h-screen border-r border-gray-700'>
			<NavLink to='/' className={getStyles}>
				<IoHome />
				<span>Home</span>
			</NavLink>
			<NavLink to='/archive' className={getStyles}>
				<IoArchiveOutline />
				<span>Archive</span>
			</NavLink>
			<NavLink to='/important' className={getStyles}>
				<MdLabelImportant />
				<span>Important</span>
			</NavLink>
			<NavLink to='/bin' className={getStyles}>
				<RiDeleteBin6Line />
				<span>Bin</span>
			</NavLink>
		</aside>
	);
};

export default SideBar;
