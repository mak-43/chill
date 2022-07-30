import React, { useState } from 'react';
import {NavLink,Outlet} from 'react-router-dom'
import AddModal from '../Components/AddModal';

const Dashboard = () => {
    const [add,setAdd]=useState(null)
    return (
        <div className='bg-base-200'>
           
            <div className='flex flex-row '>
                <div className='basis-1/4 bg-white rounded-r-2xl py-10 px-5 md:mx-10 my-5' >
                
                <label  onClick={()=>setAdd(true)} for="addmodal" class="  btn modal-button flex  items-center gap-3 ">
                    <NavLink to='add'>  </NavLink>
                    <i class="fa-solid fa-plus"></i> 
                    <p>ADD Advertise</p> 
                </label>

                    <NavLink  className='flex  items-center gap-3 px-2' to='addvideo'><i class="fa-solid fa-video-slash"></i> <p>ADD Video</p> </NavLink>
                   

                    <NavLink className='flex items-center gap-3 px-2' to='add'><i class="fa-solid fa-plus"></i> <p>ADD Advertise</p> </NavLink>
                   
                   
                   
                </div>
                <div className='basis-full flex flex-col justify-center items-center'>

                    <Outlet/>
                </div>
            </div>
            {
                add && <AddModal setAdd={setAdd}></AddModal>
            }
        </div>
    );
};

export default Dashboard;