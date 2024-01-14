import Link from "next/link";
import React from "react";

const SolvedQuestionsBox = () => {
  return (
    <div className="flex  px-0.2 rounded-md mb-4 bg-black">
      <div className="flex flex-col">
      <div className="flex mr-5">
      <div className="flex flex-col space-y-3 rounded-md p-8 ">
        <div className="text-gray-600">
        <h1>Data Structures Topics:</h1>
        </div>
      <div className='flex flex-wrap  mt-10 mb-5 mr-4'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Dynamic Programming</h1>
          </Link>
        </div>
        <div className='flex flex-wrap  mt-10 mb-5 mr-4'>
          <Link href='/Subtopic2'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Rescursion</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5 mr-4'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Graphs</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic3'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Trees</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Arrays</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic6'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>LinkedList</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Sliding Window</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Queues</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>String</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Stacks</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Sorting</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Searching</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Binary Search Trees</h1>
          </Link>
        </div>
        <div className='flex flex-wrap mt-10 mb-5'>
          <Link href='/Subtopic1'>
            <h1  className='py-1 px-2 cursor-pointer rounded-md text-white ease-in-out'>Heap</h1>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default SolvedQuestionsBox;
