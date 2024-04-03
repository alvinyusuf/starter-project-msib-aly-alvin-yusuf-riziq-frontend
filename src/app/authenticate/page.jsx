import AuthenticateForm from '@/components/AuthenticateForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Authenticate",
};

export default function Authenticate() {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 bg-orange-500 flex justify-center items-center">
        <Image src='/new_logo.png' alt='logo' width={500} height={500} />
      </div>
      <div className="basis-1/2 flex flex-col px-20">
        <div className="h-1/6 flex items-center py-4 text-gray-400"><Link href='/'>&lt; Back</Link></div>
        <div className="h-5/6 px-10 py-6">
          <AuthenticateForm></AuthenticateForm>
        </div>
      </div>
    </div>
  )
}
