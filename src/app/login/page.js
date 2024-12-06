import React from 'react';
import signinImage from '@/app/images/signin.png';
import Image from 'next/image';


const page = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='relative grid grid-cols-2 w-[80%] h-1/2 rounded-3xl shadow-lg'
                style={{
                    backgroundImage: "linear-gradient(45deg, #f3f4f6 15%, transparent 15%), linear-gradient(-45deg, #f3f4f6 15%, transparent 15%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px"
                }}>
                <div className='flex flex-col items-center justify-center p-8'>
                    <form className='flex flex-col gap-6'>
                        <div className='text-center gap-2'>
                            <h1 className='text-2xl font-semibold mb-4'>Log in</h1>
                            <p className='text-sm text-gray-600'>Welcome back! Please enter your details</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-700 font-medium'>Email</label>
                            <input
                                type='text'
                                required
                                className='border-2 spacing-2  border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#d4bcf8]'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-700 font-medium'>Password</label>
                            <input
                                type='password'
                                required
                                className='border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#d4bcf8]'
                            />
                        </div>

                        <div className='text-right'>
                            <span className='text-sm text-[#7428ea] cursor-pointer'>Forgot password?</span>
                        </div>

                        <input
                            type='submit'
                            value='Log in'
                            className='bg-[#7428ea] text-white p-2 rounded-lg cursor-pointer hover:bg-[#] transition-colors'
                        />

                        <div className='text-center mt-4'>
                            <p className='text-sm'>Or continue with</p>
                        </div>
                    </form>

                    <div className='text-center'>
                        <span className='text-sm'>
                            Don’t have an account? <b className='text-[#7428ea] cursor-pointer'>Sign up</b>
                        </span>
                    </div>
                </div>

                <div className='h-full overflow-hidden bg-inherit'>
                    <Image src={signinImage} alt="Signinbg-gray-100 Image" className='w-full h-full object-cover rounded-r-3xl rounded-bl-3xl' />
                </div>
            </div>
        </div>
    );
};

export default page;
