import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHome, IoArchiveOutline } from "react-icons/io5";
// import { MdLabelImportant } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const SideBar = () => {
	const getStyles = ({ isActive }) => {
		const style =
			" flex items-center lg:mb-2 md:mb-2 gap-3 px-2 py-1 rounded rounded-tr rounded-br border border-gray-500/50";
		return isActive
			? `bg-blue-600/50 ${style}`
			: `hover:bg-blue-600/50 lg:mb-2 md:mb-2  text-slate-300/50 bg-grey-800 ${style} transition-colors duration-400 `;
	};
	return (
		<>
			<aside className='hidden lg:inline mt-2 fixed top-0 left-0 flex-col text-xl gap-3 w-[20%] lg:w-[16%] md:w-[16%] p-3 h-[100vh] border-r border-gray-700'>
				<h1 className="w-[2px] mb-2">NotsApp</h1>
				<NavLink to='/' className={getStyles}>
					<IoHome/>
					<span className="hidden lg:block md:block">Home</span>
				</NavLink>
				<NavLink to='/archive' className={getStyles}>
					<IoArchiveOutline />
					<span className="hidden lg:block md:block">Archive</span>
				</NavLink>
				{/* <NavLink to='/important' className={getStyles}>
					<MdLabelImportant />
					<span>Important</span>
				</NavLink> */}
				<NavLink to='/bin' className={getStyles}>
					<RiDeleteBin6Line />
					<span className="hidden lg:block md:block">Bin</span>
				</NavLink>
			</aside>
			<div className="flex justify-center items-center lg:hidden md:hidden">
				<aside className='fixed lg:hidden flex md:hidden bottom-1 w-[80%] gap-5 border rounded-lg border-gray-700/90 focus:border-pink-600  py-2 px-6 items-center justify-center'>
				<NavLink to='/' className={getStyles}>
					<IoHome/>
				</NavLink>
				<NavLink to='/archive' className={getStyles}>
					<IoArchiveOutline />
				</NavLink>
				{/* <NavLink to='/important' className={getStyles}>
					<MdLabelImportant />
					<span>Important</span>
				</NavLink> */}
				<NavLink to='/bin' className={getStyles}>
					<RiDeleteBin6Line />
				</NavLink>
			</aside>
			</div>
		</>
	);
};

export default SideBar;
