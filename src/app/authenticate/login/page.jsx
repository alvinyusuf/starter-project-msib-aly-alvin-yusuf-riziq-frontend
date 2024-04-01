import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Login() {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 bg-orange-500 flex justify-center items-center">
        <Image src='/new_logo.png' alt='logo' width={500} height={500} />
      </div>
      <div className="basis-1/2 flex flex-col px-20">
        <div className="h-1/6 flex items-center py-4 text-gray-400"><Link href='/'>&lt; Back</Link></div>
        <div className="h-5/6 px-10 py-6">
          <h1 className='font-bold text-2xl text-gray-800'>Account Login</h1>
          <p className='text-gray-400 mt-4'>If you are already a member you can login with your email address and password</p>
          <form action="" method="post" className='flex flex-col mt-8'>
            <label htmlFor="" className='block'>Email Address</label>
            <input type="email" name="" id="" className='shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline' placeholder="Enter your email" />
            <label htmlFor="" className='block mt-4'>Password</label>
            <input type="password" name="" id="" className='shadow border rounded py-2 px-3 mt-2 focus:outline-none focus:shadow-outline' placeholder="Enter your password" />
            <div class="flex items-center justify-center mt-6">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Login
              </button>
            </div>
            <div class="flex items-center justify-center mt-6">
              <p className='text-gray-400'>Dont have an account? <Link href='/' className='text-blue-700'>Sign up here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
