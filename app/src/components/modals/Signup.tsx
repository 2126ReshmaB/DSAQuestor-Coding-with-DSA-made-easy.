import React, { useEffect, useState } from 'react';
import {authModalState } from "@/atoms/authModelAtom";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
type signUpProps = {
    
};

const signUp:React.FC<signUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev,typr:"login"}));
    };
    const [inputs,setInputs] = useState({email:'',displayName:'',password:''});
    const router = useRouter();
const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev,[e.target.name]:e.target.value}));
    };
    const handleRegister = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputs.email || !inputs.password || !inputs.displayName)
                   return alert("Please fill all fields");
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password);
        if(!newUser) return;
        router.push('/');
        }
        catch(error:any){
            alert(error.message);
        }
    };
    useEffect(() => {
        if(error) alert(error.message);
    },[error])
    return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
    <h3 className="text-xl font-medium text-white">Register to LeetCode</h3>
    <div>
        <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
            Your Email
        </label>
        <input
        onChange={handleChangeInput} type="email" name="email" id="email" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder='name@company.com'/>
    </div>
    <div>
        <label htmlFor="displayName" className="text-sm font-medium block mb-2 text-gray-300">
            Display Name
        </label>
        <input
        onChange={handleChangeInput} type="displayName" name="displayName" id="displayName" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder='Reshma'/>
    </div>
    <div>
        <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
            Your Password
        </label>
        <input 
        onChange={handleChangeInput} 
        type="password" name="password" id="password" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder='**********'/>
    </div>
    <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
    text-sm px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-700-s">
        {loading ? "Registering..." : "Register"}
    </button>
    
    <div className="text-white font-medium textgray-300">
        Already have an account?{"   "}
        <a href="#" className="text-blue-700 hover:underline">
            Log In
        </a>

    </div>
</form>
);
};
export default signUp;