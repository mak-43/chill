import React, { useState } from 'react';
import AddModal from '../Components/AddModal';


const Add = () => {
    const [add,setAdd]=useState(null)
    return (
        <div className='w-full h-[600px]'>
                <label onClick={()=>setAdd(true)} for="addmodal"  className='flex  items-center gap-5 justify-start py-10 mx-6 font-semibold hover:text-red-600 '>Add Manage</label>


                {
                add && <AddModal setAdd={setAdd}></AddModal>
            }
        </div>
    );
};

export default Add;