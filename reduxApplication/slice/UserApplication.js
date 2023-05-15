import { useDispatch,useSelector } from 'react-redux';
import { fetchUserDetails } from './actionReducer';
import { useState } from 'react';
import AppModal from '../modal/AppModal';


function UserApplication() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
      setIsModalOpen(true);
  };
  const handleOk = () => {
      setIsModalOpen(false);
  };
  const handleCancel = () => {
      setIsModalOpen(false);
  };

  const dispatch=useDispatch();
  const {data, isLoading}=useSelector(state=>state.users);
  if(isLoading){
    return <h1>loading...</h1>
  }
  return (
    <div className="App">
      <button onClick={(e)=>dispatch(fetchUserDetails())}>FETCH USER DETAILS</button>
      {data?.map((e)=><li>{e}</li>)}                                                                                                                          
      <AppModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
    
  );
}

export default UserApplication;

