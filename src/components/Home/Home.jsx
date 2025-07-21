import React, { useReducer, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { notsReducer } from "../../reducers/notsReducers";
import NotsCard from "../NotsCard/NotsCard";

const Home = () => {
	const initialState = {
		text: "",
		title: "",
		notes: [],
	};

	const [{ text, title, notes }, notsDispatch] = useReducer(
		notsReducer,
		initialState
	);
	const onTitleChange = (e) => {
		notsDispatch({
			type: "TITLE",
			payload: e.target.value,
		});
	};

	console.log(notes);

	const onTextChange = (e) => {
		notsDispatch({
			type: "TEXT",
			payload: e.target.value,
		});
	};

	const onAddClick = () => {
		notsDispatch({
			type: "ADD_NOTE",
		});
	};
	return (
		<div className='flex gap-3 justify-center items-center'>
			<SideBar />
			<div className='flex flex-col items-center w-[90%] gap-1 mt-20 rounded'>
				<input
					value={title}
					onChange={onTitleChange}
					className='w-[70%] py-2 px-3 border border-blue-700/50 rounded outline-none text-xl'
					type='text'
					placeholder='Title'
				/>
				<textarea
					value={text}
					onChange={onTextChange}
					className='w-[70%] h-[25vh] p-3 border border-blue-700/50 rounded outline-none resize-none'
					name=''
					id=''
					placeholder='Start typing'
				></textarea>
				<div className='bg-blue-500/70 border-blue-700/50 mt-2 relative left-[357px] border border-grey-400/70 py-1 px-6 text-md rounded'>
					<button onClick={onAddClick} className='flex items-start'>
						Add
					</button>
				</div>
				<div className="flex mt-5 flex-wrap w-[80%] items-center justify-center">
					{
						notes?.length > 0 && notes.map((note) => {
							return <NotsCard note={note} key={note.id}/> 
					})	
					}
				</div>
			</div>
		</div>
	);
};

export default Home;
