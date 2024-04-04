import AuthenticateForm from "@/components/AuthenticateForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

export const metadata = {
  title: "Authenticate",
};

export default function Authenticate() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:hidden h-24 bg-orange-500 px-10 flex items-center justify-between">
        <Image src="/logo_navbar.png" width={80} height={80} alt="logo" />
        <Link href="/" className="text-white">
          <FaCircleXmark size={40}></FaCircleXmark>
        </Link>
      </div>
      <div className="hidden md:basis-1/2 bg-orange-500 md:flex justify-center items-center">
        <Image src="/new_logo.png" alt="logo" width={500} height={500} />
      </div>
      <div className="h-full md:basis-1/2 flex flex-col md:px-20 justify-center px-6">
        <div className="hidden h-[100px] md:flex items-center py-2 text-gray-400">
          <Link href="/">&lt; Back</Link>
        </div>
        <div className="flex items-center justify-center">
          <AuthenticateForm></AuthenticateForm>
        </div>
      </div>
    </div>
  );
}
