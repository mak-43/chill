import React from 'react';

const Video = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between '>
                <div className='flex gap-5 justify-start items-start'>
                    <button className='text-red-600'>ADD Videos</button>
                    <button className=''><i class="fa-solid fa-circle-plus"></i> Add Video</button>
                </div>
                <div className='input-bordered input  w-full max-w-xs '>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search " class="" />
                </div>
            </div>
            <div>
                hello
            </div>
        </div>
    );
};

export default Video;