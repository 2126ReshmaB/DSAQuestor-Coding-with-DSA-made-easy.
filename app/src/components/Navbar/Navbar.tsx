import Link from "next/link";
import React from "react";
import { authModalState } from "@/atoms/authModelAtom";
import {useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () =>{
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, isOpen: true}));
    };
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center justify-center h-20">
            <img src="/logo.png" alt="LeetClone" className="h-full"/>
        </Link>
        <div className="flex items-center">
            <button
            className="bg-blue-400 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:text-brand-orange hover:bg-blue-400 hover:border-2 hover:border-blue-400>
             " 
             onClick={handleClick}
             >Sign In
            </button>
        </div>
    </div>;
};
export default Navbar;
