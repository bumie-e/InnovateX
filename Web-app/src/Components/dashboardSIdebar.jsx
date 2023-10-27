import { useState } from "react";
import logo from "/assets/chat_logo.png";
import { Link } from "react-router-dom";

function DashboardSIdebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* desktop */}
      <div
        className="hidden lg:block h-full fixed z-10 top-0 left-0 bg-white w-[309px]
          overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px] pl-6 pr-4"
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="mt-16 flex flex-col gap-8">
              <div>
                <img src="" alt="" />
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div>
                <img src="" alt="" />
                <Link to="/chat">Chat</Link>
              </div>
              <div>
                <img src="" alt="" />
                <Link to="/courses">Courses</Link>
              </div>
              <div>
                <img src="" alt="" />
                <Link to="/quiz">Quiz</Link>
              </div>
            </div>
          </div>

          {/* profile */}
          <div className="flex-between py-8 px-7">
            <div>
              <img src="" alt="" />
              <span>Bunmi Akinremi</span>
            </div>

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      {isOpen && (
        <div
          className="lg:hidden h-full fixed z-20 top-0 left-0 pl-6 pr-4 w-[309px]
  overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px]   bg-white"
        >
          <div
            className="absolute top-10 right-0 bg-red-400 py-2 px-4 "
            onClick={() => setIsOpen(!isOpen)}
          >
            x
          </div>

          <img src={logo} alt="" />
        </div>
      )}
    </>
  );
}

export default DashboardSIdebar;
