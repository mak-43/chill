import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Videos = ({ Video }) => {
    const { category, title, duration, type, url, img, country,_id } = Video
    const [view, setView] = useState(false)
    const handleDelete=(id)=>{
        console.log(id)
       fetch(`http://localhost:5000/video/${id}`,{
        method:'DELETE'
       }).then(res=>res.json())
       .then(data=>{
        toast.success('Video deleted')
       })

    }
    return (
        <div>
            <div className='' >
           
                    <div className=' '>
                        <img className='rounded-xl h-36 w-full' src={img} alt="" />
                    </div>
                    <div className='flex justify-between my-2 px-2 font-semibold'>
                        <p>{title}</p>


                        {
                            !view ? <i onClick={() => setView(!view)} class="fa-solid fa-caret-down cursor-pointer hover:text-green-500"></i> : <i onClick={() => setView(!view)} class="fa-solid fa-caret-up cursor-pointer hover:text-green-500"></i>
                        }
                        <i onClick={()=>handleDelete(`${_id}`)} class="fa-solid fa-trash  cursor-pointer hover:text-red-600"></i>
                    </div>
               

                <div >
                    {view && <div className='flex flex-col items-start gap-2'>
                        <p><span className='font-semibold'>Category: </span>{category}</p>
                        <p><span className='font-semibold'>Duration: </span>{duration} min</p>
                        <p><span className='font-semibold'>Type: </span>{type}</p>
                        <p><span className='font-semibold'>Country: </span>{country}</p>
                       

                        <p>{url}</p>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Videos;