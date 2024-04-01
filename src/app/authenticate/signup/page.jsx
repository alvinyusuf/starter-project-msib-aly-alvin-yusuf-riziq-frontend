import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Signup() {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 bg-orange-500 flex justify-center items-center">
        <Image src='/new_logo.png' alt='logo' width={500} height={500} />
      </div>
      <div className="basis-1/2 flex flex-col px-20">
        <div className="h-1/6 flex items-center py-4 text-gray-400"><Link href='/'>&lt; Back</Link></div>
        <div className="h-5/6 px-10 py-6">
          <h1 className='font-bold text-2xl text-gray-800'>Account Signup</h1>
          <p className='text-gray-400 mt-4'>Become a member and enjoy exclusive promotions</p>
          <form action="" method="post" className='flex flex-col mt-8'>
            <label htmlFor="email" className='block'>Email Address</label>
            <input type="email" name="" id="email" className='shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline' placeholder="Enter your email" />
            <label htmlFor="password" className='block mt-4'>Password</label>
            <input type="password" name="" id="password" className='shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline' placeholder="Enter your password" />
            <label htmlFor="confirm" className='block mt-4'>Confirm Password</label>
            <input type="password" name="" id="confirm" className='shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline' placeholder="Enter your password" />
            <div class="flex items-center justify-center mt-6">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign up
              </button>
            </div>
            <div class="flex items-center justify-center mt-6">
              <p className='text-gray-400'>Already have an account? <Link href='./login' className='text-blue-700'>Login here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
