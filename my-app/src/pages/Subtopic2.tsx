import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useHasMounted from "@/hooks/useHasMounted";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const useAutoTyping = (
  lines: (string | number)[],
  updateFunction: React.Dispatch<React.SetStateAction<string>>,
  setIsAutoTyping: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const textRef = useRef<string>('');
  const lineIndexRef = useRef<number>(0);
  const charIndexRef = useRef<number>(0);

  const typeNextCharacter = () => {
    if (lineIndexRef.current < lines.length) {
      const currentLine = lines[lineIndexRef.current];
      if (typeof currentLine === 'string') {
        if (charIndexRef.current < currentLine.length) {
          textRef.current += currentLine[charIndexRef.current];
          updateFunction(textRef.current);
          charIndexRef.current++;
        } else {
          textRef.current += '\n'; // Add a new line
          updateFunction(textRef.current);
          lineIndexRef.current++;
          charIndexRef.current = 0;
        }
      } else if (typeof currentLine === 'number') {
        setTimeout(() => {
          lineIndexRef.current++;
          charIndexRef.current = 0;
          typeNextCharacter();
        }, currentLine);
        return;
      }
      setTimeout(typeNextCharacter, 100); // Adjust the delay as needed (100 milliseconds in this example)
    } else {
      setIsAutoTyping(false); // Stop auto-typing when all lines are written
    }
  };

  useEffect(() => {
    typeNextCharacter();
  }, []); // Run once when the component mounts

  return textRef;
};
const Subtopic1: React.FC = () => {
    const [loadingProblems,setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const text1Ref = useAutoTyping(
    [
      "Recursion means defining a problem in terms of itself.This can be a very powerful tool in writing algorithms. Recursion comes directly from Mathematics, where there are many examples of expressions written in terms of themselves. For example, the Fibonacci sequence is defined as: F(i) = F(i-1) + F(i-2). ","Using a recursive algorithm, certain problems can be solved quite easily. Examples of such problems are Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc. A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems. Many more recursive calls can be generated as and when required."
    ],
    setText1,
    setIsAutoTyping
  );
  const text1Ref1 = useAutoTyping(
    [
      `int fact(int n)
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  const text1Ref2 = useAutoTyping(
    [
      "{"
    ],
    setText1,
    setIsAutoTyping
  );
  const text1Ref3 = useAutoTyping(
    [
      `if (n < = 1) // base case
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  const text1Ref4 = useAutoTyping(
    [
      `return 1;
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  const text1Ref5 = useAutoTyping(
    [
      `else
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  const text1Ref6 = useAutoTyping(
    [
      `return n*fact(n-1);  
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  const text1Ref7 = useAutoTyping(
    [
      `}
        `
    ],
  
    setText1,
    setIsAutoTyping
  );
  useEffect(() => {
    if (!hasMounted) return;

    return () => {
      // Cleanup logic if needed
    };
  }, [hasMounted]);

  return (
    <>
    <div className='bg-dark-layer-2 min-h-screen bg-center min-h-screen'>
    <main className='bg-dark-layer-2 min-h-screen relative overflow-x-auto mx-auto px-6 pb-10 bg-opacity-70'>
      
    <Topbar problemPage/>
      <div className='flex flex-wrap justify-center items-center mt-10 mb-5'>
        
            <h1  style={{borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='text-lg px-8 py-3 mx-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300'>Recursion</h1>
          
        </div>
          {/* Your YouTube video iframe */}
         
          <br />
  
    <div  style={{height: '300px'}}  className='flex space-x-10'>
      
      <div style={{height: '300px',borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='mr-4 shadow-lg'>
        
          <div style={{height: '300px'}}  className='text-white bg-black rounded-md p-4 py-20 text-sm text-center max-w-[900px] mx-auto'>
          <h1 className='text-white py-2'><b>Recursion</b></h1>
            {text1Ref.current}
          </div>
          
          </div>
          <div style={{ height: '300px', lineHeight: '20px',width: '600px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='shadow-lg rounded-md'>
      
      <iframe style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }}  className='px-2 py-2'
        
        width='100%'
        height='315'
        src='https://www.youtube.com/embed/IJDJ0kBx2LM'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <br />
      <br />
     
    </div>
      </div>
          
<br /><br /><br />
<br />
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Before starting, one needs to learn several steps to solve a recursive problem.</b></h1>
<div className='flex space-x-20 py-20 px-20'>
<div style={{ height: '422px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='flex space-x-20 px-8'>
      
        <div>
        <h2 className='text-xl text-gray-500 item-center px-4 py-4 flex flex-col space-x-4'>Algorithm: steps</h2>
              <ul className='text-white px-3'>
                <li>
                <p className='text-red-500'>Step1</p><p> Define a base case: Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.</p><br />
                </li>
                <li>
                <p className='text-red-500'>Step2</p><p> Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.</p><br />
                </li>
                <li>
                  
                  <p className='text-red-500'>Step3</p> <p> Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.</p><br />
                </li>
                <li>
                <p className='text-red-500'>Step4</p><p> Combine the solutions: Combine the solutions of the subproblems to solve the original problem.</p>
                </li>
                {/* Add more video links as needed */}
              </ul>
              </div>
              
            </div>
            <div>
            <img
                    src='rect.png'
                    alt='Image Alt Text'
                    style={{ height: '422px', borderRadius: '30px',width: '600px' }}
                  />
          
            </div>
            
    
</div>
<br />
<br />
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Let's consider the Fibonacci sequence as a simple example to gain an understanding of recursion..</b></h1>
<div className='flex space-x-20 py-20 px-20'>

            <div style={{ height: '300px', lineHeight: '20px',width: '670px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='flex space-x-5'>
            <div style={{width:'300px',height: '280px'}} className='rounded-md py-5'>
        <h1 className='text-gray-500 px-2 py-4'>A Recursive code for Fibonacci Series</h1>
        <div  className='text-white px-7 py-1'>
          {text1Ref1.current}
        </div>
        <div className='text-white px-7'> 
          {text1Ref2.current}
        </div>

        <div className='text-white px-12'> 
          {text1Ref3.current}
        </div>
        <div className='text-white px-14'> 
          {text1Ref4.current}
        </div>
        <div className='text-white px-12'> 
          {text1Ref5.current}
        </div>
        <div className='text-white px-14'> 
          {text1Ref6.current}
        </div>
        <div className='text-white px-7'> 
          {text1Ref7.current}
        </div>
        </div>
        <img className='rounded-md ml-4'
                    src='rec.png'
                    alt='Image Alt Text'
                    style={{ width: '380px', borderRadius: '10px',height: '300px' }}
                  />
    
</div>

<div style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='flex space-x-10 px-8'>

        <div>
        <h2 className='text-xl text-gray-500 px-2 py-8 flex flex-col space-x-2'>Related YouTube Videos</h2>
              <ul className='text-white px-8'>
                <li className='hover:text-gray-500 cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=tyB0ztf0DNY' target='_blank' rel='noopener noreferrer'>
                    Take You Forward 
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=nqowUJzG-iM' target='_blank' rel='noopener noreferrer'>
                  Aditya Verma
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=IJDJ0kBx2LM' target='_blank' rel='noopener noreferrer'>
                  freeCodeCamp.org 
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=nBchKqaVwd8' target='_blank' rel='noopener noreferrer'>
                  
                     Aryan Mittal
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=k1erTVrGMnE&list=PLEI-q7w3s9gTJxsvjlI4NxWXtI3-UHUff' target='_blank' rel='noopener noreferrer'>
                  Coding Decoded
                  </a>
                </li>
                {/* Add more video links as needed */}
              </ul>
              </div>
              <div>
              <h2 className='text-xl text-gray-500 px-2 py-8 flex flex-col'>Related Website Links</h2>
              <ul className='text-white px-8'>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.geeksforgeeks.org/dynamic-programming/' target='_blank' rel='noopener noreferrer'>
                    GeeksForGeeks
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://leetcode.com/problemset/?topicSlugs=dynamic-programming&page=1' target='_blank' rel='noopener noreferrer'>
                  LeetCode
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.hackerrank.com/' target='_blank' rel='noopener noreferrer'>
                 HackerRank
                  </a>
                </li>
                <li className='hover:text-black cursor-pointer'>
                  <a href='https://www.codingninjas.com/studio/problem-of-the-day' target='_blank' rel='noopener noreferrer'>
                  
                     CodingNinjas
                  </a>
                </li>
              
                {/* Add more video links as needed */}
              </ul>
                </div>
            </div>
</div>
<br />
<br />
<div style={{ marginLeft: '5px' }} className='relative flex space-x-5 px-2 pb-10'>
   
<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
    
    <thead className='text-xs text-gray-700 dark:text-gray-400 border-b '>
    <tr>
      <th scope='col' className='bg-blue-500 text-white rounded-md px-1 py-3 w-0 font-medium'>
        Problem No
      </th>
      <th scope='col' className='bg-blue-900 text-white rounded-md px-6 py-3 w-0 font-medium'>
        Title
      </th>
      <th scope='col' className='bg-blue-500 text-white rounded-md px-6 py-3 w-0 font-medium'>
        Difficulty
      </th>

      <th scope='col' className='bg-blue-900 text-white px-6 rounded-md py-3 w-0 font-medium'>
        Category
      </th>
      <th scope='col' className='bg-blue-500 text-white px-6 rounded-md py-3 w-0 font-medium'>
        Companies asked
      </th>
      <th scope='col' className='bg-blue-900 text-white px-6 rounded-md py-3 w-0 font-medium'>
        Solve Problem
      </th>
    </tr>
    <tr>
      <th scope='col' className='text-white px-1 py-3 w-0 font-medium'>
        1.
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      Climbing Stairs 
      </th>
      <th scope='col' className='text-green-500 px-6 py-3 w-0 font-medium'>
        Easy
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        9
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/climbing-stairs/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </th>  </tr>
    <tr>
      <th scope='col' className='bg-dark-layer-1 text-white px-1 py-3 w-0 font-medium'>
        2.
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      Min Cost Climbing Stairs 
      </th>
      <th scope='col' className='bg-dark-layer-1 text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        5
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/min-cost-climbing-stairs/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      
      
    </tr>
    <tr>
      <th scope='col' className='text-white px-1 py-3 w-0 font-medium'>
        3.
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      Unique Paths
      </th>
      <th scope='col' className='text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        19
      </th>
      <td scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/unique-paths/description/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
       </tr>
    <tr>
      <th scope='col' className='bg-dark-layer-1 text-white px-1 py-3 w-0 font-medium'>
       4.
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Unique paths II
      </th>
      <th scope='col' className='bg-dark-layer-1 text-red-400 px-6 py-3 w-0 font-medium'>
        Hard
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        15
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/unique-paths-ii/description/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      
      
    </tr>
    <tr>
      <th scope='col' className='text-white px-1 py-3 w-0 font-medium'>
        5.
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Minimum Path sum
      </th>
      <th scope='col' className='text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        9
      </th>
      <td scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/minimum-path-sum/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
        </tr>
    <tr>
      <th scope='col' className='bg-dark-layer-1 text-white px-1 py-3 w-0 font-medium'>
        6.
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
       House Robber
      </th>
      <th scope='col' className='bg-dark-layer-1 text-red-400 px-6 py-3 w-0 font-medium'>
        Hard
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        7
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/house-robber/9s/4465354/java-code-Recursion-beats-100/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      
    </tr>
    <tr>
      <th scope='col' className='text-white px-1 py-3 w-0 font-medium'>
       7.
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Coin Change
      </th>
      <th scope='col' className='text-green-500 px-6 py-3 w-0 font-medium'>
        Easy
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        18
      </th>
      <td scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/coin-change/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      </tr><tr>
      <th scope='col' className='bg-dark-layer-1 text-white px-1 py-3 w-0 font-medium'>
        8.
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Partition Equal subset sum
      </th>
      <th scope='col' className='bg-dark-layer-1 text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        15
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/partition-equal-subset-sum/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      
      
    </tr>
    <tr>
      <th scope='col' className='text-white px-1 py-3 w-0 font-medium'>
        9.
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      Longest common subsequence
      </th>
      <th scope='col' className='text-green-500 px-6 py-3 w-0 font-medium'>
        Easy
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        10
      </th>
      <td scope='col' className='text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/longest-common-subsequence/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td> 
      </tr>
    <tr>
      <th scope='col' className='bg-dark-layer-1 text-white px-1 py-3 w-0 font-medium'>
        10.
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Longest Palindrome subsequence
      </th>
      <th scope='col' className='bg-dark-layer-1 text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        Recursion
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        9
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/longest-palindromic-subsequence/'>
          <h1  className='cursor-pointer text-white ease-in-out'>Click here</h1>
        </Link>
      </div>
      </td>
      
      
    </tr>
  </thead>
  
  
</table>
  </div>
  <div className="contact-section bottom-0 left-0 right-0 p-12 bg-black text-white flex justify-center">
        <h2 className="text-xl font-semibold mr-4">Join me on to clarify doubts:</h2>
        <a href="www.linkedin.com/in/reshma2126" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="2em" />
          </a>
        </div>
    
  
  </main>
  </div>
  </>
  );
};

export default Subtopic1;
