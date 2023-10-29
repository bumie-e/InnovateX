import { useState } from "react";
import menu from "/assets/menu.png";
import DashboardSIdebar from "../Components/dashboardSIdebar";
import Intro from "../Components/quiz/quizIntro";

function Quiz() {
  const [isOpen, setIsOpen] = useState(false);

  // if form is successful, return chat, else return onboarding
  return (
    <>
      <DashboardSIdebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="lg:ml-[309px]">
        {/* desktop */}
        <header
          className="hidden lg:flex border-[#E6E5EE] border-b-[1px]  
        lg:justify-between px-16 py-5 lg:items-center"
        >
          {" "}
          <p className="font-semibold text-[32px]">Quiz</p>
          <div>
            <img src="" alt="" />
            <p>Take a quiz</p>
          </div>
        </header>

        {/* mobile */}
        <header
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
        px-16 py-4 flex-between"
        >
          <img src={menu} onClick={() => setIsOpen(!isOpen)} alt="menu icon" />
          <p className="font-semibold text-[32px]">Quiz</p>
          <div></div>
        </header>

        <Intro />
      </main>
    </>
  );
}

export default Quiz;
