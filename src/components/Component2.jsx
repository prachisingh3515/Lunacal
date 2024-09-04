import React, { useState } from 'react';
import { FaPlus, FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import img from "../assets/img.png";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { RiLayoutGrid2Fill } from "react-icons/ri";

const Component2 = () => {
  const [images, setImages] = useState([img, img, img]); 
  const [currIndex, setCurrIndex] = useState(0);
  const imgView = 3; 

  const addImage = () => {
    setImages([...images, img]); 
  };

  const handleNext = () => {
    if (currIndex < images.length - imgView) {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  return (
    <div className='w-[600px] h-[240px] bg-[#363C43] text-white mt-5 mr-12 rounded-lg res-comp2'>
      <div className='flex comp2-header'>
        <HiOutlineQuestionMarkCircle className='text-[#A3ADBA] ml-4 mt-4 size-6 ' />
        <button className='bg-[#131415] rounded-[10px] mt-4 ml-5 p-2 pl-5 pr-5'>Gallery</button>
        <button
  onClick={addImage}
  className='bg-gradient-to-r from-gray-600 to-gray-700 rounded-[20px] mt-4 ml-[35%] p-2 pl-3 pr-3 flex gap-2 text-xs shadow-[4px_4px_8px_0px_rgba(0,0,0,0.75),-4px_-4px_8px_0px_rgba(128,128,128,0.75)]'
>
  <FaPlus className='mt-1 size-3' /> Add image
</button>
        <div className='flex gap-3 mt-4 ml-6'>
          <button onClick={handlePrev} disabled={currIndex === 0}>
            <FaCircleArrowLeft className={`size-8 ${currIndex === 0 ? 'text-darkGray' : ''}`} />
          </button>
          <button onClick={handleNext} disabled={currIndex >= images.length - imgView}>
            <FaCircleArrowRight className={`size-8 ${currIndex >= images.length - imgView ? 'text-darkGray' : ''}`} />
          </button>
        </div>
        
      </div>
      <div className='flex pt-7 pl-10 gap-5 overflow-hidden'>
        <div>
          <RiLayoutGrid2Fill className='text-[#4A4E54] ml-[-20px] mt-4 size-5' />
        </div> 
        <div className='flex transition-transform duration-300 comp2-para' style={{ transform: `translateX(-${currIndex * (150 + 20)}px)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`img-${index}`} width="150px" className="mr-5" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Component2;
