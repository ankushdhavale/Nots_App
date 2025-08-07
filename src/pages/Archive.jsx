import React from "react";
import SideBar from "../components/SideBar/SideBar";
import { useNots } from "../context/notsContext";
import NotsCard from "../components/NotsCard/NotsCard";

const Archive = () => {
	const { archive } = useNots();

	return (
		<div>
			<SideBar />
			<div className='ml-56 mt-20'>
				<div className='flex mt-5 flex-wrap w-[80%] items-center justify-center'>
					{archive?.length > 0 &&
						archive.map((note) => {
							return <NotsCard note={note} key={note.id} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default Archive;
