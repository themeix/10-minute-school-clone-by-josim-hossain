import React from 'react';

const Login = () => {
    return (
        <div className='py-36 flex justify-center items-center'>
            <div className="">
                <h1 className="text-xl text-gray-600 font-bold mb-4 text-center">ঘরে বসে পড়াশোনার সহজ সমাধান</h1>
                <form action="" className='mx-auto'>
                    <label htmlFor="" className='block text-lg text-gray-500'>মোবাইল নাম্বার/ইমেইল</label>
                    <input type="text" placeholder="01xxxxxxxxx" className="w-[400px] outline-none rounded p-2 bg-gray-200 my-2" />
                    <input type="button" value="এগিয়ে যান" className='block w-[400px] bg-green-600 text-white py-1 text-lg rounded cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default Login;