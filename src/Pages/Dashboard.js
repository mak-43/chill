import React, { useState } from 'react';
import {NavLink,Outlet} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
   
    return (
        <div className='bg-base-200'>
           
            <div className='flex flex-row '>
                <div className='basis-1/4 bg-white rounded-r-2xl py-10 px-5 md:mx-10 my-5 flex flex-col gap-5' >
                
               

                    <NavLink  className='flex  items-center gap-3 px-2 hover:text-red-600 font-semibold ' to='addvideo'><i class="fa-solid fa-video-slash  font-semibold"></i> <p>ADD Video</p> </NavLink>
                   

                    <NavLink className='flex items-center gap-3 px-2 hover:text-red-600 font-semibold' to='add'><i class="fa-solid fa-plus font-semibold"></i> <p>Advertise</p> </NavLink>
                   
                   
                   
                </div>
                <div className='basis-full flex flex-col justify-center items-center'>

                    <Outlet/>
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;