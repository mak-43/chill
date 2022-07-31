import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddModal from '../Components/AddModal';
import AddVideo from '../Components/AddVideo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Player } from 'video-react';
import Videos from './Videos';


const Video = () => {
    const [add, setAdd] = useState(null)
    const [user, loading, error] = useAuthState(auth);
    const [videos, setVideo] = useState([])
    useEffect(() => {
        fetch(`https://radiant-journey-19299.herokuapp.com/allvideo`)
            .then(res => res.json())
            .then(data => setVideo(data))
    }, [videos])

    return (
        <div className='w-full h-[800px]'>
            <div className='flex  items-center gap-5 justify-end py-5 mx-6'>
                <i class="fa-solid fa-headphones-simple"></i>
                <i class="fa-solid fa-bell"></i>
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span class="text-xs"><img className='rounded ' src={user.photoURL ?
                            user?.photoURL : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU`
                        } alt="" /></span>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-3'>
                <div className='flex gap-5 justify-start items-center md:order-1  order-2'>
                    <label onClick={() => setAdd(true)} for="addvideo" className='hover:text-red-600 font-semibold cursor-pointer'>ADD Videos</label>

                    <label onClick={() => setAdd(true)} for="addvideo" className='hover:text-red-600 font-semibold cursor-pointer'><i class="fa-solid fa-circle-plus"></i> Add Video</label>

                </div>


            </div>
            <div className='py-10  mx-auto text-center'>
                videosssssssssss
                <div className='grid md:grid-cols-4 sm:grid-cols-2  gap-5'>
                    {
                        videos?.map(v => <Videos
                            key={v._id}
                            Video={v}
                        ></Videos>)
                    }
                </div>




            </div>
            {
                add && <AddVideo setAdd={setAdd}></AddVideo>
            }
        </div>
    );
};

export default Video;