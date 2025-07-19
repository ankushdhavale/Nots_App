import React, { useReducer, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { notsReducer } from "../../reducers/notsReducers";

const Home = () => {

	const initialState = ({
		text: '',
		title: '',
		notes:[]
	
	})

	const [{ text, title, notes }, notsDispatch] = useReducer(notsReducer, initialState);
	const onTitleChange = (e) => {
		notsDispatch({
			type: "TITLE",
			payload: e.target.value,
		})
	}

	console.log(notes);
	
	const onTextChange = (e) => {
		notsDispatch({
			type: "TEXT",
			payload:e.target.value,
		})
	}


	const onAddClick = () => {
		notsDispatch({
			type:"ADD_NOTE"
		})
	}
	return (
		<div className='flex gap-3'>
			<SideBar />
			<div className='flex flex-col items-center w-[90%] mt-4 gap-1'>
        <input
          value={title}
					onChange={onTitleChange}
					className='w-[40%] py-2 px-3 border border-slate-500/50 rounded outline-none text-xl'
					type='text'
					placeholder='Title'
				/>
        <textarea
          value={text}
					onChange={onTextChange}
					className='w-[40%] h-[40%] p-3 border-slate-500/50 rounded outline-none resize-none'
					name=''
					id=''
					placeholder='Start typing'
				></textarea>
				<div>
					<button onClick={onAddClick} className="flex items-start">Add</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
