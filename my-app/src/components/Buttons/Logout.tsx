import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from "react-icons/fi"
  
const Logout:React.FC = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = () => {
        signOut();
    };
    return <button className="bg-dark-fill-3 py-1.5 px-3 cursor-ponter rounded text-blue-500" onClick={handleLogout}>
        <FiLogOut />
    </button>
};
export default Logout;