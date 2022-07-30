import React from 'react';

const AddModal = ({setAdd}) => {
    console.log('okkkkkkk')
      
    return (
        <div>

     


            <input type="checkbox" id="addmodal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Google AD</h3>
                    <p class="py-2">Banner Admod ID </p>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <p class="py-2">Interesticial Admob ID</p>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <div className='border-2 p-5 rounded-xl my-3'>
                        <p class="py-2">Interesticial Admob Click</p>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2" />
                    </div>
                    <p class="py-2">Interesticial Admob ID</p>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                    <div className='border-2 px-5 py-2 rounded-xl my-3'>
                        <p class="py-2">Native AD Per Video(You may also like)</p>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2" />
                        <p class="py-2">Native AD Per Video(For Series)</p>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2" />
                    </div>

                    <div class="modal-action">
                        <label for="addmodal" class="btn">Add</label>
                        <label for="addmodal" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;