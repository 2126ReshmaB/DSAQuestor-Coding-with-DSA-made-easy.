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
      "A tree is a non-linear abstract data type with a hierarchy-based structure. It consists of nodes (where the data is stored) that are connected via links. The tree data structure stems from a single node called a root node and has subtrees connected to the root."
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
        
            <h1  style={{borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='text-lg px-8 py-3 mx-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300'>Trees Data Structure</h1>
          
        </div>
          {/* Your YouTube video iframe */}
         
          <br />
  
    <div  style={{height: '300px'}}  className='flex space-x-10'>
      
      <div style={{height: '300px',borderRadius: '10px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'}} className='mr-4 shadow-lg'>
        
          <div style={{height: '300px'}}  className='text-white bg-black rounded-md p-4 py-20 text-sm text-center max-w-[900px] mx-auto'>
          <h1 className='text-white py-2'><b>Tree Data structure</b></h1>
            {text1Ref.current}
          </div>
          
          </div>
          <div style={{ height: '300px', lineHeight: '20px',width: '600px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='shadow-lg rounded-md'>
      
      <iframe style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }}  className='px-2 py-2'
        
        width='100%'
        height='315'
        src='https://www.youtube.com/embed/4s1Tcvm00pA'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <br />
      <br />
     
    </div>
      </div>
          
<br />
<br />
<br />
<br />
<h1 className='text-white flex justify-center items-center'>Structure of Tree Data Structure</h1>
<br />
<div className='flex space-x-4'>
<div>
<img className='bg-gray-200'
                    src='tree.png'
                    alt='Image Alt Text'
                    style={{ width: '700px', borderRadius: '10px',height: '500px' }}
                  />
</div>
<div className='py-2'>
<div><p className='text-green-400'>Parent Node:</p><p className='text-pink-400'> The node which is a predecessor of a node is called the parent node of that node. L is the parent node of E , F and G.</p></div>
<div><p className='text-green-400'>Child Node:</p><p className='text-pink-400'> The node which is the immediate successor of a node is called the child node of that node. Examples: E,F and G are the child nodes of L.</p></div>
<div><p className='text-green-400'>Root Node:</p><p className='text-pink-400'> The topmost node of a tree or the node which does not have any parent node is called the root node. P is the root node <br />of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.</p></div>
<div><p className='text-green-400'>Ancestor of a Node::</p><p className='text-pink-400'> Any predecessor nodes on the path of the root to that node are called Ancestors of that node.  P and Q are the ancestor nodes of the node B.</p></div>
<div><p className='text-green-400'>Descendant:</p><p className='text-pink-400'> Any successor node on the path from the leaf node to that node. I and M are the descendants of the node C.</p></div>
<div><p className='text-green-400'>Sibling:</p><p className='text-pink-400'> Children of the same parent node are called siblings. A and B are called siblings.</p></div>
<div><p className='text-green-400'>Level of a Node:</p><p className='text-pink-400'>The count of edges on the path from the root node to that node. The root node has level 0.</p></div>
<div><p className='text-green-400'>Subtree:</p><p className='text-pink-400'>Any node of the tree along with its descendant.</p></div>

</div>
</div>
<br />
<br />
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Let us get an idea about the types of trees.</b></h1>
<div className='flex space-x-20 py-20'>
<div className='flex space-x-15 px-8'>
 <div>
<img
                    src='treetypes.png'
                    alt='Image Alt Text'
                    style={{ width: '800px', borderRadius: '10px',height: '330px' }}
                  />
                  <p className="text-white text-center mt-2">Types of trees</p>
                  <br />
            
                
            </div>      
                  
      </div>

      
      <div  className='flex space-x-20'>
        <div className='py-1'>
<div><p className='text-blue-500'>Binary Tree:</p><p className='text-yellow-500'>In a binary tree, each node can have a maximum of two children linked to it. Some common types of binary trees include full binary trees, complete binary trees, balanced binary trees, and degenerate or pathological binary trees.</p></div>
<div><p className='text-blue-500'>Ternary Tree:</p><p className='text-yellow-500'> A Ternary Tree is a tree data structure in which each node has at most three child nodes, usually distinguished as “left”, “mid” and “right”.</p></div>
<div><p className='text-blue-500'>N-ary Tree:</p><p className='text-yellow-500'>Generic trees are a collection of nodes where each node is a data structure that consists of records and a list of references to its children(duplicate references are not allowed). Unlike the linked list, each node stores the address of multiple nodes.</p></div>
<div><p className='text-blue-500 py-1'>Other types of trees:</p>
<p className='text-yellow-500'>
  <ul className='text-yellow-500'>
    <li>Binary Search Tree</li>
    <li>AVL tree</li>
    <li>Red Black Tree</li>
  </ul>
</p>
</div>
</div>
      </div>
      <div  className='flex space-x-10'>
        
      </div>

</div>
<br />
<h1 className='text-white flex flex-wrap justify-center items-center'><b>Let's explore the operations in a tree data structure and the process of creating nodes.</b></h1>
<div className='flex space-x-20 py-20 px-20'>
<div style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='flex space-x-20 px-8'>
      
        <div>
        <h2 className='text-xl text-gray-500 item-center px-1 py-4 flex flex-col space-x-2'>Node creation</h2>
              <ul className='text-white px-5'>
                <li>public class Node</li>
                <li className='px-5'>int data;</li>
                <li className='px-5'>Node left;</li>
                <li className='px-5'>Node right;</li>
                <li>Node(int data,Node left,Node right)</li>
                <li className='px-5'>this.data = data;</li>
                <li className='px-5'>this.left = null;</li>
                <li className='px-5'>this.right = null;</li>
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
            <div style={{ height: '300px', lineHeight: '20px',width: '600px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }}>
            <h1 className='text-gray-500 py-3 px-5'>Operations on tree data structure</h1>
            <ol className='px-5 text-white'>
              <li><b className='text-gray-500'>Create </b>– create a tree in the data structure.</li>
              <li><b className='text-gray-500'>Insert </b>– Inserts data in a tree.</li>
              <li><b className='text-gray-500'>Search </b>–  Searches specific data in a tree to check whether it is present or not.</li>
              <li><b className='text-gray-500'>Traversal: </b></li>
              <li className='px-10'><b className='text-gray-500'>PreOrder Traversal </b>– perform Traveling a tree in a pre-order manner in the data structure. (root -- left -- right)</li>
              <li className='px-10'><b className='text-gray-500'>InOrder Traversal </b>– perform Traveling a tree in an in-order manner. (left -- root -- right)</li>
              <li className='px-10'><b className='text-gray-500'>Post - Order Traversal </b>– perform Traveling a tree in a post-order manner. ( left -- right -- root)</li>
              
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
     Traversals
      </th>
      <th scope='col' className='text-green-500 px-6 py-3 w-0 font-medium'>
        Easy
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Maximum Depth of Binary Tree
      </th>
      <th scope='col' className='bg-dark-layer-1 text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Sum of Root To Leaf Binary Numbers
      </th>
      <th scope='col' className='text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Diameter of Binary Tree 
      </th>
      <th scope='col' className='bg-dark-layer-1 text-red-400 px-6 py-3 w-0 font-medium'>
        Hard
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Sum of Left Leaves
      </th>
      <th scope='col' className='text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Cousins in Binary Tree
      </th>
      <th scope='col' className='bg-dark-layer-1 text-red-400 px-6 py-3 w-0 font-medium'>
        Hard
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        trees
      </th>
      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        7
      </th>
      <td scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
      <div className='flex flex-wrap py-3 px-6'>
        <Link href='https://leetcode.com/problems/house-robber/9s/4465354/java-code-trees-beats-100/'>
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
      Construct Binary Tree from Preorder and Postorder Traversal 
      </th>
      <th scope='col' className='text-green-500 px-6 py-3 w-0 font-medium'>
        Easy
      </th>

      <th scope='col' className='text-white px-6 py-3 w-0 font-medium'>
        trees
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
      Construct Binary Tree from Inorder and Postorder Traversal
      </th>
      <th scope='col' className='bg-dark-layer-1 text-yellow-400 px-6 py-3 w-0 font-medium'>
        Medium
      </th>

      <th scope='col' className='bg-dark-layer-1 text-white px-6 py-3 w-0 font-medium'>
        trees
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
