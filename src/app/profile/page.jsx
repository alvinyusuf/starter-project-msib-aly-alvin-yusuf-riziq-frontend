import ProfileCarad from "@/components/ProfileCarad";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

export const metadata = {
  title: "Profile",
  description: "Profile page",
};

export default function Profile() {
  return (
        <div className="flex flex-col">
      <div className="h-24 bg-orange-500 px-10 flex items-center justify-between">
        <Image src='/logo_navbar.png' width={80} height={80} alt='logo' />
        <Link href='/' className='text-white'><FaCircleXmark size={40}></FaCircleXmark></Link>
      </div>
      <div className="flex flex-col py-10">
        <div className="flex justify-center">
        <FaRegUserCircle size={180} />
        </div>
        <div className="flex justify-center">
          <div className="mt-4 md:mx-14">
            <ProfileCarad></ProfileCarad>
          </div>
        </div>
      </div>
    </div>
  );
}
