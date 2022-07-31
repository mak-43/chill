import React, { useEffect, useState } from 'react';
import AddModal from '../Components/AddModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
    const [add, setAdd] = useState(null)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://radiant-journey-19299.herokuapp.com/alladd`).then(res => res.json()).then(data => setData(data))
    }, [data])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://radiant-journey-19299.herokuapp.com/add/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                toast.success('Add deleted')
            })

    }
    return (
        <div className='w-full h-[800px]'>
            <label onClick={() => setAdd(true)} for="addmodal" className='  hover:text-red-600  flex  items-center gap-5
                 py-5 mt-10 font-semibold cursor-pointer'>ADD Manage</label>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    data.map(d => <div key={d._id}>

                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Banner id: {d.bannerid}</h2>
                                <p>Admob id: {d.admobid}</p>
                                <p>Admob click: {d.admobclick}</p>
                                <p>Interresticial Admob click: {d.iadmobid}</p>
                                <p>Native AD Per Video(You may also like): {d.nativeadd}</p>
                                <p>Native AD Per Video(For Series): {d.nativeper}</p>
                                <div class="card-actions justify-end">
                                    <button onClick={() => handleDelete(`${d._id}`)} class=" hover:text-red-600"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>

            {
                add && <AddModal setAdd={setAdd}></AddModal>
            }
        </div>
    );
};

export default Add;