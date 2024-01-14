import { authModalState } from '@/atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import Image from "next/image";
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = () => {
        setAuthModalState((prev) =>({...prev,isOpen:true}));
    };
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center justify h-20">
            <Image src='/logo-full.png' alt='LeetClone' height={200} width={200} />
        </Link>
        <div className="flex items-center space-x-4">
            <button
            className="bg-blue-900 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out"
            onClick={handleClick}
            >
                Sign In
            </button>
         

            <div>
                        <a
                        href='https://leetcode.com/contest/'
                        target='_blank'
                        rel = 'noreferrer'
                        className='bg-blue-900 py-1 px-2 cursor-pointer rounded-md text-white hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out br-4'
                        >
                           Contests
                        </a>
                    </div>
            <div>
                        <a
                        href='https://leetcode.com/assessment/'
                        target='_blank'
                        rel = 'noreferrer'
                        className='bg-blue-900 py-1 px-2 cursor-pointer rounded-md text-white hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out'
                        >
                            Companies
                        </a>
                    </div>
            <div>
                        <a
                        href='https://leetcode.com/discuss/interview-question?currentPage=1&orderBy=hot&query='
                        target='_blank'
                        rel = 'noreferrer'
                        className='bg-blue-900 py-1 px-2 cursor-pointer rounded-md text-white hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out'
                        >
                            Discuss
                        </a>
                    </div>
        </div>
        </div>;
    
};
export default Navbar;