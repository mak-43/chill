import React from 'react';
import { useForm } from 'react-hook-form';
import { toast,ToastContainer } from 'react-toastify';
const AddVideo = ({refetch,setAdd}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ console.log(data)
        
        const image = data?.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const imgStorageKey = '6d58d8deea3773d04ec3b9955d466d7f'
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        category: data.category,
                        title:data.title,
                        duration: data.duration,
                       type: data.type,
                        url: data.url,
                       img: img,
                       description: data.description,
                       country: data.country,

                    }
                    fetch(`http://localhost:5000/video`, {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('success', data)
                            

                        })
                    toast.success('Video Added')
              
                    setAdd(null)
                    refetch()
                }
            })


    };
    return (
        <div>




            <input type="checkbox" id="addvideo" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box  ">
                    <h3 class="font-bold text-lg mb-5 ">Add Video</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 justify-center items-start '>

                        <div class="input input-bordered w-full max-w-xs  flex justify-between">
                            <input  placeholder='Category' />
                            <select className='border-none'  {...register("category")}>
                                <option value="long">Long</option>
                                <option value="medium">Medium</option>
                                <option value="small">Small</option>
                            </select>
                        </div>

                        <input type="text" placeholder="Video Tile" class="input input-bordered w-full max-w-xs" {...register("title")} />

                        <input type="number" placeholder="Video Duration" class="input input-bordered w-full max-w-xs " {...register("duration")} />

                        <select placeholder='Video Type' class="input input-bordered w-full max-w-xs " {...register("type")}>
                            <option value="mp4">MP4</option>
                            <option value="mov">MOV</option>
                            <option value="wmv">WMV</option>
                        </select>

                        <input type="text" placeholder="Video URL" class="input input-bordered w-full max-w-xs " {...register("url")} />


                        <label htmlFor="filee" className='border border-black py-4 px-8 border-dashed flex flex-col justify-center items-center gap-5 rounded'>
                            <i class="fa-solid fa-image text-3xl"></i>

                            <small className='text-slate-500'>upload Thumbnail</small>

                            <input id='filee' type="file" placeholder="image" class="input input-bordered w-full max-w-xs hidden " {...register("img")} />

                        </label>
                        <small className='flex justify-center items-center'> <span className='mb-1 mr-1 font-bold'>.</span> Image Size Should Be 500*300px</small>



                        <textarea class="textarea textarea-bordered w-full max-w-xs " placeholder="Description" ></textarea>

                        <select placeholder='Select Country' class="input input-bordered w-full max-w-xs " {...register("country")}>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="america">America</option>
                            <option value="german">German</option>
                        </select>

                        <div class="modal-action">

                            <input type="submit" value='Add Video' className='bg-red-600 rounded text-white  px-7 py-2 cursor-pointer' />
                            <label for="addvideo" class=" rounded border border-black cursor-pointer px-7 py-2">Cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddVideo;