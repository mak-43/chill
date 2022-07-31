import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddModal = ({ setAdd }) => {
    console.log('okkkkkkk')

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch(`https://radiant-journey-19299.herokuapp.com/add`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)


                toast.success('Video Added')
            })
        setAdd(null)
    }



    return (
        <div>




            <input type="checkbox" id="addmodal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Google AD</h3>
                    <p class="py-2">Banner Admod ID </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="" class="input input-bordered w-full" {...register("bannerid")} />

                        <p class="py-2">Interesticial Admob ID</p>
                        <input type="text" placeholder="" class="input input-bordered w-full " {...register("admobid")} />
                        <div className='border-2 p-5 rounded-xl my-3'>
                            <p class="py-2">Interesticial Admob Click</p>
                            <input type="number" placeholder="02" class="input input-bordered w-full max-w-xs my-2"{...register("admobclick")} />
                        </div>
                        <p class="py-2">Interesticial Admob ID</p>
                        <input type="text" placeholder="" class="input input-bordered w-full " {...register("iadmobid")} />

                        <div className='border-2 px-5 py-2 rounded-xl my-3'>
                            <p class="py-2">Native AD Per Video(You may also like)</p>
                            <input type="number" placeholder="02" class="input input-bordered w-full max-w-xs my-2" {...register("nativeadd")} />
                            <p class="py-2">Native AD Per Video(For Series)</p>
                            <input type="number" placeholder="03" class="input input-bordered w-full max-w-xs my-2"{...register("nativeper")} />
                        </div>

                        <div class="modal-action">

                            <input type="submit" value='ADD' className='btn btn-primary text-white' />
                            <label for="addmodal" class="btn hover:bg-red-600">cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddModal;