import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useHasMounted from "@/hooks/useHasMounted";
import { useState } from "react";
import Link from "next/link";
import SolvedQuestionsBox from "@/components/Solved/SolvedQuestionsBox";
import Dropdown from "@/components/Solved/Dropdown";
import { FaCoins } from "react-icons/fa";

export default function Home() {

  // const [inputs,setInputs] = useState({
   // id: '',
   // title: '',
   // difficulty: '',
   // category: '',
   // videoId: '',
   // link: '',
   // order: 0,
   // likes: 0,
    //dislikes: 0,
  //}) 
  //const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //setInputs({
    //...inputs,
   //[e.target.name]: e.target.value
   //})
  //};
  //const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
   //e.preventDefault();
   //const newProblem = {
    //...inputs,
  //order: Number(inputs.order),
   //}
  //await setDoc(doc(firestore, "problems", inputs.id), newProblem);
  //alert("Saved to DB");
  //}

  // between </div> && </main>
  //<form className="p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
  // <input onChange={handleInputChange} type="text" placeholder="problem id" name="id" />
  // <input onChange={handleInputChange} type="text" placeholder="title" name="title" />
  // <input onChange={handleInputChange} type="text" placeholder="difficulty" name="difficulty" />
  // <input onChange={handleInputChange} type="text" placeholder="category" name="category" />
  // <input onChange={handleInputChange} type="text" placeholder="order" name="order" />
   // <input onChange={handleInputChange} type="text" placeholder="videoId?" name="videoId" />
   // <input onChange={handleInputChange} type="text" placeholder="link?" name="link" />
  // <button className='bg-white'>Svae to DB</button>
  // </form>
  const [loadingProblems,setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  const handleSubtopicClick = (subtopic: string) => {
    console.log(`Clicked on subtopic: ${subtopic}`);
  };
  
  return (
    
    <>
    <main className='bg-dark-layer-2 min-h-screen'>
      <Topbar problemPage/>
      <div className="quote-box">
        <h1 className=" text-center text-black-700 dark:text-white font-medium uppercase mt-10 mb-5">
        "First, solve the problem. Then, write the code."
        </h1>
        <h1 className=" text-center text-white font-medium mt-10 mb-5 px-6">
        Here are some most important problems, which are asked frequently by top MNC.
        </h1>
       </div>
       
        <div className="flex space-x-20">
        <SolvedQuestionsBox />
  <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
    {loadingProblems && (
      <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
        {[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
      </div>
    )}
  <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
    {!loadingProblems && (
      <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
      <tr>
        
        <th scope='col' className='bg-blue-500 text-white rounded-md px-1 py-3 w-0 font-medium'>
          Status
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
          Solution
        </th>
        <th scope='col' className='bg-blue-900 text-white px-6 rounded-md py-3 w-0 font-medium'>
          Hint
        </th>
        <th scope='col' className='bg-blue-500 text-white px-6 rounded-md py-3 w-0 font-medium'>
          Take Notes
        </th>
      </tr>
    </thead>
    )}
    <ProblemsTable setLoadingProblems={setLoadingProblems} />
  </table>
  </div>
  <div className="flex-col space-y-4">
  <div style={{ height: '150px', lineHeight: '20px',width: '250px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px'}} className='hello-box flex-item-small flex-basis:100px border border-4 border-black  py-2 px-2 cursor-pointer rounded-md text-gray-600  ease-in-out'>Solved Problems:
  <p className="text-white py-2">Easy    - 20</p>
  <p className="text-white py-2">Medium    - 10</p>
  <p className="text-white">Hard    - 5</p>
  </div>
  <div style={{ height: '150px', lineHeight: '20px',width: '250px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px'}} className='hello-box flex flex-col space-y-4 border border-4 border-black  py-2 px-2 cursor-pointer rounded-md text-gray-600  ease-in-out'>Contests:
  <Dropdown />
  </div>
  <br />
  <br /><br />
  <div style={{ height: '100px', lineHeight: '20px',width: '250px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '29px' }} className='hello-box flex flex-col space-y-6 bg-blue-900 py-2 px-5 cursor-pointer rounded-md text-black-900  ease-in-out'><b>How to get goodies?</b>
  <ul className='text-white px-8'>
                
                <li>
                  <div className='flex space-x-4'>
                  <a href='https://leetcode.com/store/' target='_blank' rel='noopener noreferrer'>
                 LeetCode Store
                  </a>
              <FaCoins />
              </div>
                </li>
                <li>
                  <a href='https://practice.geeksforgeeks.org/reward' target='_blank' rel='noopener noreferrer'>
                  
                    GeeksForGeeks
                  </a>
                </li>
                {/* Add more video links as needed */}
              </ul>
              
  </div><br />

  <div style={{ height: '150px', lineHeight: '20px',width: '250px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',borderRadius: '20px'}} className='hello-box flex flex-col space-y-6 bg-black py-2 px-2 cursor-pointer rounded-md text-gray-600  ease-in-out'>Note:
  <p className="text-white py-2">Only Javascript code is accepted for first 5 problems and remaining will be redirected to original leetcode platform.</p>
  </div><br />
  </div>
  </div>
 
  </main>
  
      </>
      
  );
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
