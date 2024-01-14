import Link from "next/link";
import React, { SetStateAction, useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose, IoLogoAmazon, IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { DBProblem } from "@/utils/types/problem";
import { MdLightbulbOutline, MdNote } from "react-icons/md";
import { FaAmazon, FaStickyNote } from "react-icons/fa";

type ProblemsTableProps = {
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};


const Note: React.FC<{ isOpen: boolean; onClose: () => void; onSave: (text: string) => void; noteText: string }> = ({
    isOpen,
    onClose,
    onSave,
    noteText,
  }) => {
    const [localNoteText, setLocalNoteText] = useState(noteText);
  
    useEffect(() => {
      setLocalNoteText(noteText);
    }, [noteText]);
  
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
  
      document.addEventListener("keydown", handleEsc);
  
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }, [onClose]);
  
    if (!isOpen) {
      return null;
    }
  
    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLocalNoteText(event.target.value);
    };
  
    const handleSaveNote = () => {
      onSave(localNoteText);
    };
  
    return (
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center" onClick={onClose}>
        <div className="bg-white p-4" onClick={(e) => e.stopPropagation()}>
          <textarea value={localNoteText} onChange={handleNoteChange} placeholder="Type your note here..." rows={6} cols={30} />
          <button onClick={handleSaveNote}>Save Note</button>
          <button onClick={onClose}>Close Note</button>
        </div>
      </div>
    );
  };
 const rowImages = [
  "Screenshot (208).png",
    "logo-full.png",
    "logo1.png",
    "logo-full.png",
    "logo1.png",
    "logo-full.png",
    "logo1.png",
    "logo-full.png",
    "Screenshot (207).png",
    
    // Add more image URLs as needed
  ];
  
const ProblemsTable:React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
    const [isNoteOpen, setNoteOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  
  const [showImage, setShowImage] = useState<number | null>(null);


    const [youtubePlayer,setYoutubePlayer] = useState({
        isOpen : false,
        videoId : ""
    });
    const problems = useGetProblems(setLoadingProblems);
      const [noteTexts, setNoteTexts] = useState<string[]>(Array(problems.length).fill(""));
    const solvedProblems = useGetSolvedProblems();
    console.log("solvedProblems",solvedProblems)
    const closeModal = () => {
        setYoutubePlayer({isOpen:false,videoId:""});
    };
    const handleNoteSave = (text: string) => {
        if (selectedRowIndex !== null) {
          const newNoteTexts = [...noteTexts];
          newNoteTexts[selectedRowIndex] = text;
          setNoteTexts(newNoteTexts);
          setNoteOpen(false);
          setSelectedRowIndex(null);
        }
      };
    
    useEffect(() => {
        const handleEsc = (e : KeyboardEvent) => {
            if(e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown",handleEsc);
        return () => window.removeEventListener("keydown",handleEsc);
    },[]);

    return (
        <>
        <tbody className='text-white'>
            {problems.map((problem,idx) => {
                const difficultyColor = problem.difficulty === "Easy" ? "text-dark-green-s" : problem.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
                
                return (
                    <tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={problem.id}>
                        <th className = 'px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            
                            {solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18'/>}

                        </th>
                        <td className="px-6 py-4">
                            {problem.link ? (
                                <Link href={problem.link} className="hover:text-blue-600 cursor-pointer" target="_blank">
                                    {problem.title}
                                </Link>
                            ):(
                                <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${problem.id}`}>
                                {problem.title}
                            </Link>
                            )} 
                        </td>
                        <td className={`px-6 py-4 ${difficultyColor}`}>{problem.difficulty}</td>

                        <td className={'px-6 py-4'}>
                            {problem.category}
                        </td>
                        <td className={"px-6 py-4"}>
                            {problem.videoId ? (
                                <AiFillYoutube 
                                fontSize={"28"}
                                className="cursor-pointer hover:text-red-500"
                                onClick={() => setYoutubePlayer({isOpen : true,videoId:problem.videoId as string})}
                                />
                            ): (
                                <p className="text-gray-400">Coming Soon</p>
                            )}
                        </td>
                        <td className="px-6 py-4">
            <button onClick={() => setShowImage(idx)}>
              <MdLightbulbOutline fontSize="28" style={{ color: "#F5E050" }} />
            </button>
          </td>
                        <td className="px-6 py-4">
                            <button onClick={() => { setNoteOpen(true); setSelectedRowIndex(idx); }}>
                            <MdNote fontSize="28" style={{ color: "#F5E050" }} />
                            </button>
                        </td>
                    </tr>
                    );
            })
        }
        </tbody>
        {showImage !== null && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center" onClick={() => setShowImage(null)}>
          <div className="bg-white p-4" onClick={(e) => e.stopPropagation()}>
            {/* Add your image tag or component here */}
            <img src={rowImages[showImage]} alt={`Image ${showImage + 1}`} />
            <button onClick={() => setShowImage(null)} className="text-black">
              Close Image
            </button>
          </div>
        </div>
      )}
        {youtubePlayer.isOpen && (
        <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center ' >
		<div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'></div>
		<div className='w-full z-50 h-full px-6 relative max-w-4xl'>
			<div className='w-full h-full flex items-center justify-center relative'>
				<div className='w-full relative'>
					<IoClose fontSize={"35"} className='cursor-pointer absolute -top-16 right-0'  
                    onClick={closeModal}/>
					<YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
				</div>
			</div>
		</div>
</tfoot>
        )}
         {isNoteOpen && selectedRowIndex !== null && (
        <Note
          isOpen={isNoteOpen}
          onClose={() => { setNoteOpen(false); setSelectedRowIndex(null); }}
          onSave={(text) => handleNoteSave(text)}
          noteText={noteTexts[selectedRowIndex]}
        />
      )}
        </>
    );
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>){
    const [problems,setProblems] = useState<DBProblem[]>([]);
    useEffect(() => {
        const getProblems = async () => {
            setLoadingProblems(true);
            const q = query(collection(firestore,"problems"),orderBy("order","asc"))
            const querySnapshot = await getDocs(q);
            const tmp: DBProblem[]=[];
            querySnapshot.forEach((doc) => {
                tmp.push({id:doc.id,...doc.data()} as DBProblem)
              });
             setProblems(tmp);
             setLoadingProblems(false);

        };
        getProblems()
    },[setLoadingProblems]);
    return problems;
}

function useGetSolvedProblems() {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getSolvedProblems = async () => {
            const userRef = doc(firestore, "users",user!.uid);
            const userDoc = await getDoc(userRef);

            if(userDoc.exists()){
                setSolvedProblems(userDoc.data().solvedProblems);
            }
        };
        if(user) getSolvedProblems();
        if(!user) setSolvedProblems([]);
    },[user]);
    return solvedProblems;
}


