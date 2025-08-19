import React from "react";
import { MdDeleteOutline ,MdDelete} from "react-icons/md";
import { IoArchiveOutline, IoArchive } from "react-icons/io5";
import { LuPin, LuPinOff } from "react-icons/lu";
import { useNots } from "../../context/notsContext";

const NotsCard = ({ note }) => {
	const { id, title, text, isPinned } = note;
	// console.log(isPinned);
	// console.log(note);

	const { notesDispatch, archive,bin } = useNots();

	const clickIsPinned = (id) => {
		!isPinned &&
			notesDispatch({
				type: "PIN",
				payload: { id },
			});
	};

	const clickUnPinned = (id) => {
		notesDispatch({
			type: "UNPIN",
			payload: { id },
		});
	};

	const clickedArchive = (id) => {
		notesDispatch({
			type: "ARCHIVE",
			payload: { id },
		});
	};

	const clickedUnArchive = (id) => {
		notesDispatch({
			type: "REMOVE_FROM_ARCHIVE",
			payload:{id}
		})
		toast('Remove from Archive', 80)
	}

	const clickedUnBin = (id) => {
		notesDispatch({
			type: "REMOVE_FROM_BIN",
			payload:{id}
		})
		toast('Remove from Bin', 80)
	}

	const findNotesInArchive = (archive, id) => {
		return archive?.some((note) => note.id === id);
	};

	const findNotesInBin = (bin, id) => {
		return bin?.some((binNote) => binNote.id === id);
	}


	console.log(findNotesInBin);
	
	const clickedBin = (id) => {
		notesDispatch({
			type: "BIN",
			payload:{id}
		})
	}
	const isNotesArchive = findNotesInArchive(archive, id);
	const isNotesBin = findNotesInBin(bin, id);
	

	return (
		<div className='border w-[100%] md:w-[20vw] lg:w-[20vw] flex flex-col  border-blue-900/90 shadow-blue-600/50 shadow-sm m-3 p-3 rounded'>
			<div className='flex flex-wrap justify-between items-center border-b border-gray-600 mb-2 pb-2'>
				<p className='text-xl'>{title.slice(0,15)}</p>
				{!isNotesArchive  ? !isPinned && (
					<LuPin
						size={22}
						className=' cursor-pointer'
						onClick={() => clickIsPinned(id)}
					/>
				):<></>}
				{!isNotesArchive ? isPinned && (
					<LuPinOff
						size={22}
						className=' cursor-pointer'
						onClick={() => clickUnPinned(id)}
					/>
				):<></>}
			</div>
			<div className='flex items-center justify-between gap-2'>
				<p className='text-gray-500'>{text.slice(0,30)}</p>
				<div className='flex flex-col gap-1'>
					{isNotesArchive ? (
						<IoArchive
							onClick={() => clickedUnArchive(id)}
							size={19}
							className=' cursor-pointer'
						/>
					) : (
						<IoArchiveOutline
							onClick={() => clickedArchive(id)}
							size={19}
							className=' cursor-pointer'
						/>
					)}
					{
					isNotesBin ? (
						<MdDelete onClick={()=>clickedUnBin(id)} size={22} className=' cursor-pointer' />		
					): (
						<MdDeleteOutline onClick={()=>clickedBin(id)} size={22} className=' cursor-pointer' />	
					)}
				</div>
			</div>
		</div>
	);
};

export default NotsCard;
