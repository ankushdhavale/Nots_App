import React, { useReducer, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { notsReducer } from "../../reducers/notsReducers";
import NotsCard from "../NotsCard/NotsCard";
import { useNots } from "../../context/notsContext";
import { toast } from "react-toastify";

const Home = () => {
	const { notes, text, title, notesDispatch } = useNots();
	const { isPinned } = notes;
	const onTitleChange = (e) => {
		notesDispatch({
			type: "TITLE",
			payload: e.target.value,
		});
	};

	const onTextChange = (e) => {
		notesDispatch({
			type: "TEXT",
			payload: e.target.value,
		});
	};

	const onAddClick = () => {
		if (text === '' && title === '') {
			toast('Please fill input fields',80)
			return;
		}
		notesDispatch({
			type: "ADD_NOTE",
		});
		
	};

	const pinnedNotes = notes.filter((note) => note.isPinned === true);
	const otherNotes = notes.filter((note) => note.isPinned === false);
	console.log(pinnedNotes);
	console.log(otherNotes);

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
					placeholder='Start typing'
				></textarea>
				<div className='bg-blue-500/70 border-blue-700/50 mt-2 relative left-[357px] border border-grey-400/70 py-1 px-6 text-md rounded'>
					<button onClick={onAddClick} className='flex items-start'>
						Add
					</button>
				</div>
				<div className='flex flex-col mt-5 flex-wrap w-[80%] items-center justify-center'>
					{otherNotes?.length > 0 && <p>Other</p>}
					<div className='flex mt-5 flex-wrap w-[80%] items-center justify-center'>
						{otherNotes?.length > 0 &&
							otherNotes.map((note) => {
								return <NotsCard note={note} key={note.id} />;
							})}
					</div>
				</div>
				<div className='flex flex-col mt-5 flex-wrap w-[80%] items-center justify-center'>
					{pinnedNotes.length > 0 && <p>Pinned</p>}
					<div className="flex mt-5 flex-wrap w-[80%] items-center justify-center">
						{pinnedNotes?.length > 0 &&
						pinnedNotes.map((note) => {
							return <NotsCard note={note} key={note.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
