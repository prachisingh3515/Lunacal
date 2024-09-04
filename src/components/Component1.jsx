import React, { useState } from 'react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import '../App.css'; 

const Component1 = () => {
    const [activeTab, setActiveTab] = useState('About');

    const setContent = () => {
        switch (activeTab) {
            case 'About':
                return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corrupti temporibus deleniti, nisi, hic suscipit, quibusdam quaerat commodi soluta sapiente. Non id beatae quasi ratione ipsum sequi, sunt maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a, vel recusandae laborum possimus in 
                    at minus fuga minima aliquid praesentium itaque harum eum. Odit temporibus perferendis tenetur tempore nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis molestias nemo distinctio ipsa tenetur? Nesciunt sint maiores magni iusto, ratione delectus veritatis dolorem non iste reiciendis minus placeat aliquid.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae perferendis nemo sunt numquam, iusto accusantium. Incidunt aliquam placeat dolorem, quod dicta repudiandae sequi veritatis assumenda esse eveniet, ipsam laboriosam a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto repudiandae fuga deleniti dicta! Fugit pariatur rerum labore. Iure ea quidem soluta nesciunt veniam aperiam sit dicta earum iste modi. Nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatum sed delectus facilis natus? Quidem atque sunt magni, quos eveniet omnis tempora officia qui at minima maiores est tempore! Eos.</p>;
            case 'Experiences':
                return <p>This is the Experiences content.</p>;
            case 'Recommended':
                return <p>This is the Recommended content.</p>;
            default:
                return null;
        }
    };
  return (
    <div className='w-[600px] h-[220px] bg-[#363C43] mt-12 mr-12 rounded-lg res-comp1'>
    <div className='flex'>
    <HiOutlineQuestionMarkCircle className='text-[#A3ADBA] ml-4 mt-4 size-6' />

    <div className="bg-[#131415] flex items-center justify-center space-x-[2rem] ml-5 p-6 w-[80%] rounded-[20px] text-white h-10 m-4 comp1-header">
       

       <div className='text-[#A3ADBA] cursor-pointer transition transform hover:scale-110 hover:text-white hover:bg-darkGray hover:pl-10 hover:pr-10 hover:shadow-lg hover:shadow-black rounded-lg px-2 py-1  comp1-header1' onClick={() => setActiveTab('About')}>About</div>
       <div className='text-[#A3ADBA] cursor-pointer transition transform hover:scale-110 hover:text-white hover:bg-darkGray hover:pl-10 hover:pr-10 rounded-lg hover:shadow-lg hover:shadow-black/50 px-2 py-1  comp1-header2' onClick={() => setActiveTab('Experiences')}>Experiences</div>
       <div className='text-[#A3ADBA] cursor-pointer transition transform hover:scale-110 hover:text-white hover:bg-darkGray hover:pl-10 hover:pr-10 rounded-lg hover:shadow-lg hover:shadow-black/50 px-2 py-1  comp1-header3' onClick={() => setActiveTab('Recommended')}>Recommended</div>
    </div>
    </div>
 
    <div className='mr-2 flex'>
    <div>
    <RiLayoutGrid2Fill className='text-[#4A4E54] ml-4 mt-10 size-5' />
    </div>  
       <div className='text-[#A3ADBA] p-12 pl-4 pr-8 flex items-center justify-center h-[130px] overflow-y-auto custom-scrollbar comp1-para'>
          {setContent()}
       </div>
    </div>
 </div>
 
  )
}

export default Component1
