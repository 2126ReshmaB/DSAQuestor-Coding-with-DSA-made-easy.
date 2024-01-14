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
      " Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.","For example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.",
     // 1000ms delay
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
        
            <h1  style={{borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='text-lg px-8 py-3 mx-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300'>Dynamic programming</h1>
          
        </div>
          {/* Your YouTube video iframe */}
         
          <br />
  
    <div  style={{height: '300px'}}  className='flex space-x-10'>
      
      <div style={{height: '300px',borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='mr-4 shadow-lg'>
        
          <div style={{height: '300px'}}  className='text-white bg-black rounded-md p-4 py-20 text-sm text-center max-w-[900px] mx-auto'>
          <h1 className='text-white py-2'><b>Dynamic Programming</b></h1>
            {text1Ref.current}
          </div>
          
          </div>
          <div style={{ height: '300px', lineHeight: '20px',width: '600px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='shadow-lg rounded-md'>
      
      <iframe style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }}  className='px-2 py-2'
        
        width='100%'
        height='315'
        src='https://www.youtube.com/embed/BCO8JKA2_N8'
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
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Let us get an idea about DP using Fibonacci series.The Fibonacci sequence can be solved using three different approaches.</b></h1>
<div className='flex space-x-20 py-20'>
<div className='flex space-x-15 px-8'>
 <div>
<img
                    src='fibonacci-rec.png'
                    alt='Image Alt Text'
                    style={{ width: '380px', borderRadius: '10px',height: '280px' }}
                  />
                  <p className="text-white text-center mt-2">Recursive Approach</p>
                  <br />
            <p className='text-green-700'>For recursion, the time complexity would be O(2^n) <br />since every node will split into two subbranches.<br />And the space complexity would be O(N) since <br />the depth of the tree will be proportional to the size of n.</p>
                
            </div>      
                  
      </div>
      
      <div  className='flex space-x-20'>
        <div>
<img
                    src='fibonacci-memo.png'
                    alt='Image Alt Text'
                    style={{ width: '380px', borderRadius: '10px',height: '280px' }}
                  />
                  <p className="text-white text-center mt-2">Memorization Approach</p>
                  <br />
            <p className='text-pink-700'>For the top-down approach, we only solve each <br />subproblem one time. Since each subproblem takes a <br />constant amount of time to solve, this gives us a time <br />complexity of O(N). However, since we need <br />to keep an array of size N + 1 to save <br />our intermediate results, the space complexity <br />for this algorithm is also O(N).

</p>
          
                  </div>
      </div>
      <div  className='flex space-x-10'>
        <div>
<img
                    src='fibinacci-do.png'
                    alt='Image Alt Text'
                    style={{ width: '380px', borderRadius: '10px',height: '280px' }}
                  />
                  <p className="text-white text-center mt-2">Tabulation Approach</p>
                  <br />
                  <p className='text-green-700'>In the bottom-up approach, we calculate the <br />Fibonacci numbers in order until we reach F(N). <br />Since we calculate them in this order, we don’t <br />need to keep an array of size N + 1 to store <br />the intermediate results.Instead, we use variables <br />A and B to save the two most recently calculated <br />Fibonacci numbers. This is sufficient to calculate <br />the next number in the series or we can use an 1D-array:</p>
          
                  </div>
      </div>

</div>
<br />
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Let's explore the uses of Dynamic Programming (DP) and related concepts through links to enhance our understanding before delving into problem-solving.</b></h1>
<div className='flex space-x-20 py-20 px-20'>
<div style={{ height: '200px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='flex space-x-20 px-8'>
      
        <div>
        <h2 className='text-xl text-gray-500 item-center px-4 py-4 flex flex-col space-x-4'>Related YouTube Videos</h2>
              <ul className='text-white px-8'>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=tyB0ztf0DNY' target='_blank' rel='noopener noreferrer'>
                    Take You Forward 
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=nqowUJzG-iM' target='_blank' rel='noopener noreferrer'>
                  Aditya Verma
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.youtube.com/playlist?list=PLauivoElc3gimdmLcIIpafEkzGs4tCQmi' target='_blank' rel='noopener noreferrer'>
                  Luv
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=nBchKqaVwd8' target='_blank' rel='noopener noreferrer'>
                  
                     Aryan Mittal
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.youtube.com/watch?v=k1erTVrGMnE&list=PLEI-q7w3s9gTJxsvjlI4NxWXtI3-UHUff' target='_blank' rel='noopener noreferrer'>
                  Coding Decoded
                  </a>
                </li>
                {/* Add more video links as needed */}
              </ul>
              </div>
              <div>
              <h2 className='text-xl text-gray-500 item-center px-2 py-4 flex flex-col'>Related Website Links</h2>
              <ul className='text-white px-8'>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.geeksforgeeks.org/dynamic-programming/' target='_blank' rel='noopener noreferrer'>
                    GeeksForGeeks
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://leetcode.com/problemset/?topicSlugs=dynamic-programming&page=1' target='_blank' rel='noopener noreferrer'>
                  LeetCode
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.hackerrank.com/' target='_blank' rel='noopener noreferrer'>
                 HackerRank
                  </a>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <a href='https://www.codingninjas.com/studio/problem-of-the-day' target='_blank' rel='noopener noreferrer'>
                  
                     CodingNinjas
                  </a>
                </li>
              
                {/* Add more video links as needed */}
              </ul>
                </div>
            </div>
            <div style={{ height: '200px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }}>
            <h1 className='text-gray-500 py-3 px-5'>Dynamic Programming has many real world applications in various domains:</h1><br />
            <ol className='px-20 text-white'>
              <li>COMBINATORIAL OPTIMIZATION</li>
              <li>GRAPH THEORY</li>
              <li>IMAGE PROCESSING</li>
              <li>MACHINE LEARNING</li>
              <li>GENOMICS</li>
              <li>CRYPTOGRAPHY</li>
            </ol>
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
          DP
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
          DP
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
          DP
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
          DP
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
          DP
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
          DP
        </th>
        <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
          7
        </th>
        <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        <div className='flex flex-wrap py-3 px-6'>
          <Link href='https://leetcode.com/problems/house-robber/9s/4465354/java-code-dp-beats-100/'>
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
          DP
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
          DP
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
          DP
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
          DP
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
