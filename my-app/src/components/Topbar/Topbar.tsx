import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import { useRouter } from 'next/router';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
type TopbarProps = {
    problemPage ?: boolean;
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
    const [user] = useAuthState(auth);
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();
    const handleProblemChange = (isForward: boolean) => {
		const { order } = problems[router.query.pid as string] as Problem;
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction;
		const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

		if (isForward && !nextProblemKey) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isForward && !nextProblemKey) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key].order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemKey}`);
		}
	};
     return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-blue-200'>
            <div className ={'flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto":"}'}>
                <Link href='/' className='h-[22px] flex-1'>
                   <Image src='/logo1.png' alt='Logo' height={100} width={100} />
                </Link>
                {problemPage && (
                    <div className="flex items-center gap-4 flex-1 justify-center">
                        <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
                        onClick={() => handleProblemChange(true)}>
                            <FaChevronLeft />
                        </div>
                        <Link href="/" className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer">
                            <div>
                            <BsList />
                            </div>
                            <p>Problems List</p>
                        </Link>
                        <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
                        onClick={() => handleProblemChange(true)}>
                            <FaChevronRight />
                        </div>
                    </div>
                )}
                <div className='flex items-center space-x-4 flex-1 justify-end'>
                    <div>
                        <a
                        href='https://www.google.com/search?q=leetcode+premium+unlocker&rlz=1C1CHBF_enIN1006IN1006&oq=leetcode+premium&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyDAgBEEUYORixAxiABDIJCAIQABhDGIoFMgcIAxAAGIAEMgkIBBAAGEMYigUyCQgFEAAYQxiKBTIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDQ5ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1'
                        target='_blank'
                        rel = 'noreferrer'
                        className='bg-blue-900 py-1 px-2 cursor-pointer rounded-md text-white hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out'
                        >
                            Premium
                        </a>
                    </div>
                    {!user && (
                    <Link href='/auth' onClick={ () => {
                        setAuthModalState((prev) => ({...prev,isOpen:true,type: "login"}));
                    }}>
                        <button className='bg-blue-900 py-1 px-2 cursor-pointer rounded-md text-white hover:text-black hover:bg-blue hover:border-2 hover:border-black border-2 border-ransparent transition duration-300 ease-in-out'>Sign IN</button>
                    </Link>
                    )}
                    {user && problemPage && <Timer />}
                    {user && (
                        <div className="cursor-pointer group relative">
                            <img src="/avatar.png.png" alt="user prifile img" className='h-8 w-15 rounded-full bgch-white'/>
                            <div className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-blue-500 p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		                                transition-all duration-300 ease-in-out'>
		                        <p className='text-sm'>{user.email}</p>
	                        </div>
                        </div>
                    )}
                    {user && <Logout />}
                </div>
            </div>
        </nav>
    );
};
export default Topbar;