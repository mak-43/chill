import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddModal from '../Components/AddModal';
import AddVideo from '../Components/AddVideo';
const Video = () => {
    const [add,setAdd]=useState(null)
    return (
        <div className='w-full h-[600px]'>
            <div className='flex  items-center gap-5 justify-end py-5 mx-6'>
                <i class="fa-solid fa-headphones-simple"></i>
                <i class="fa-solid fa-bell"></i>
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span class="text-xs">AA</span>
                    </div>
                </div>
            </div>
          
            <div className='grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-3'>
                <div className='flex gap-5 justify-start items-start md:order-1  order-2'>
                    <label onClick={()=>setAdd(true)} for="addvideo" className='hover:text-red-600 font-semibold'>ADD Videos</label>
                   
                    <label onClick={()=>setAdd(true)} for="addvideo"className='hover:text-red-600 font-semibold'><i class="fa-solid fa-circle-plus"></i> Add Video</label>

                </div>
                <div className='input-bordered border-slate-300 border-2 bg-white  md:order-2 order-1'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" />
                </div>

            </div>
            <div className='py-10'>
                    videosssssssssss
            </div>
            {
                add && <AddVideo setAdd={setAdd}></AddVideo>
            }
        </div>
    );
};

export default Video;