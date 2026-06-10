import {motion} from 'framer-motion';
import React from 'react';

function Skillcard({ name, link }) {

  return (
   <div>
        <motion.div className="drop-shadow-xl flex justify-center items-center backdrop-blur-lg shadow-black w-[266px] h-[410px] bg-stone-900/50 rounded-[27px] ">
            <img src={link} alt={name} className=' w-64 h-[400px]  rounded-3xl' />
        </motion.div>
   </div>
  );
}

export default function Skills() {  
    return (
        <div className='flex flex-wrap gap-4 justify-center items-center'>
            <Skillcard name="HTML" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123831/ChatGPT_Image_Jun_11_2026_01_35_46_AM_wzoqut.png"/>
            <Skillcard name="CSS" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123832/ChatGPT_Image_Jun_11_2026_02_00_38_AM_ckcgrg.png"/>
            <Skillcard name="JavaScript" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123832/ChatGPT_Image_Jun_11_2026_02_00_38_AM_ckcgrg.png"/>
            <Skillcard name="React" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123831/ChatGPT_Image_Jun_11_2026_01_35_46_AM_wzoqut.png"/>
            <Skillcard name="Node.js" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123832/ChatGPT_Image_Jun_11_2026_02_00_38_AM_ckcgrg.png"/>
            <Skillcard name="MongoDB" link="https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123831/ChatGPT_Image_Jun_11_2026_01_35_46_AM_wzoqut.png"/>

            </div>
    );
}

