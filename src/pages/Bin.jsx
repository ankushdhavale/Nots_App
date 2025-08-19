import SideBar from '../components/SideBar/SideBar'
import { useNots } from '../context/notsContext'
import NotsCard from '../components/NotsCard/NotsCard';

const Bin = () => {
  const { bin } = useNots();
  return (
    <div>
      <SideBar />
      <div className='lg:ml-56 lg:mt-20 flex items-center justify-center'>
				<div className='flex mt-5 flex-wrap w-[80%] items-center justify-center'>
					{bin?.length > 0 &&
						bin.map((note) => {
							return <NotsCard note={note} key={note?.id} />;
						})}
        </div>
        {
					bin.length <= 0 && <h1 className="mt-32 mr-[80px] w-[100%] text-3xl text-gray-500">Bin is Empty</h1>
				}
			</div>
    </div>
  ) 
}

export default Bin;
