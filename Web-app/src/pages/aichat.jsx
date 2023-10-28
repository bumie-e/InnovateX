import React, { useState } from "react";

import CoursesSidebar from "../Components/courses/coursesSidebar";
import CourseContainer from "./../Components/courses/courseContainer";
import AiChat from "../Components/aichat/AiChat";

const Aichat = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CoursesSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="lg:ml-[309px]">
        {/* desktop */}
        <nav
          className="hidden lg:flex border-[#E6E5EE] border-b-[1px]  
      lg:justify-end px-16 py-5 lg:items-center flex-row"
        >
          <div className="mr-4">
            <img
              className="inline w-5 h-5 mr-1"
              src="/assets/lang.png"
              alt="this"
            />
            English
          </div>
          <div>
            <img className="inline" src="/assets/notes.png" alt="this" /> Notes
          </div>
          <div>
            <img
              className="ml-4 rounded-full h-10 w-10 inline mr-2"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1663362284/samples/people/kitchen-bar.jpg"
              alt="Profile"
            />
            Bunmi Akinremi
          </div>
        </nav>

        {/* mobile */}
        <nav
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
      px-16 py-4 flex-between"
        >
          <img
            src=""
            //  onClick={() => setIsOpen(!isOpen)}
            alt="menu icon"
          />
          <p className="font-semibold text-[32px]">Quiz</p>
          <div></div>
        </nav>

        <AiChat />

        {/* <Intro /> */}
      </main>
    </>
  );
};

export default Aichat;
