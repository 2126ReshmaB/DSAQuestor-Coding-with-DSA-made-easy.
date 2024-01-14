import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    const authModal = useRecoilValue(authModalState);
    const [user,loading,error] = useAuthState(auth); 
    const [pageLoading,setPageLoading] = useState(true);
        const router = useRouter();
    useEffect(() => {
        if(user) router.push('/');
        if(!loading && !user) setPageLoading(false);
    },[user,router,loading]);
if(pageLoading) return null;

return (
  <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-image: url('/white.jpg');
            background-size: cover;
            background-position: center;
          }
          .quote-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #000;
            padding: 20px;
            border-radius: 10px;
            opacity: 0.8;
          }
          
          .quote-box h1 {
            margin: 0;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <h1 className="text-2xl text-center text-black-700 dark:text-black font-medium mt-10 mb-20">
          &ldquo; First, solve the problem. Then, write the code &rdquo; 
          <p className="text-center">
    Problem-solving often involves a process of trial and error.<br />
    It's about testing hypotheses, learning from mistakes, and iterating <br /> to find the best solution.
  </p>
        </h1>
        <div className="quote-box">
        <h1 className="text-2xl text-center text-black-700 dark:text-white font-medium uppercase mt-10 mb-5">
          Welcome
        </h1>
       </div>
        {authModal.isOpen && <AuthModal />}
      </div>
      <div className="contact-section fixed bottom-0 left-0 right-0 p-4 bg-black text-white flex justify-center">
        <h2 className="text-xl font-semibold mr-4">Contact Me:</h2>
        <p className="flex items-center mr-4">
          <FaEnvelope /> <a href="gmailto:resh21331.cs@rmkec.ac.in">resh21331.cs@rmkec.ac.in</a>
        </p>
        <p className="flex items-center ml-4 mr-4">
          <FaPhone /> +1 9384597217
        </p>
        <div className="social-icons mt-4 flex items-center mr-4">
          <a href="https://github.com/2126ReshmaB" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2em" className="mr-4" />
          </a>
          <a href="https://www.linkedin.com/in/reshma-b-4a7967249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="2em" />
          </a>
        </div>
      </div>
   </div>
  );
};
export default AuthPage;