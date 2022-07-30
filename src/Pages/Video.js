import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddModal from '../Components/AddModal';
import AddVideo from '../Components/AddVideo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Video = () => {
    const [add,setAdd]=useState(null)
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className='w-full h-[600px]'>
            <div className='flex  items-center gap-5 justify-end py-5 mx-6'>
                <i class="fa-solid fa-headphones-simple"></i>
                <i class="fa-solid fa-bell"></i>
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span class="text-xs"><img className='rounded ' src={user?.photoURL} alt="" /></span>
                    </div>
                </div>
            </div>
          
            <div className='grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-3'>
                <div className='flex gap-5 justify-start items-center md:order-1  order-2'>
                    <label onClick={()=>setAdd(true)} for="addvideo" className='hover:text-red-600 font-semibold cursor-pointer'>ADD Videos</label>
                   
                    <label onClick={()=>setAdd(true)} for="addvideo"className='hover:text-red-600 font-semibold cursor-pointer'><i class="fa-solid fa-circle-plus"></i> Add Video</label>

                </div>
              

            </div>
            <div className='py-10 grid md:grid-cols-4 sm:grid-cols-2 justify-center items-center mx-auto text-center'>
                    videosssssssssss
                    <p>he</p>
                    <p>he</p>
                    <p>he</p>
                    <p>he</p>
            </div>
            {
                add && <AddVideo setAdd={setAdd}></AddVideo>
            }
        </div>
    );
};

export default Video;