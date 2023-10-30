import logo from "/assets/chat_logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { setLogin } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import chat from "/assets/dashboard/chat.png";
import dashboard from "/assets/dashboard/dashboard.png";
import quiz from "/assets/dashboard/quiz.png";
import course from "/assets/dashboard/course.png";

function DashboardSIdebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Successful logout
        dispatch(
          setLogin({
            user: null,
            token: null,
          })
        );
        toast("Logged out successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        // Handle error if logout fails
        toast("Log out error");
        console.error("Logout error", error);
      });
  };

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
              <div className="flex gap-2">
                <img src={dashboard} alt="" />
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="flex gap-2">
                <img src={chat} alt="" />
                <Link to="/chat">Chat</Link>
              </div>
              <div className="flex gap-2">
                <img src={course} alt="" />
                <Link to="/courses">Courses</Link>
              </div>
              <div className="flex gap-2">
                <img src={quiz} alt="" />
                <Link to="/quiz">Quiz</Link>
              </div>
              <div className="flex gap-2">
                <img src={quiz} alt="" />
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
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
            className="absolute top-10 right-0 bg-pry-col text-white py-2 px-4 "
            onClick={() => setIsOpen(!isOpen)}
          >
            x
          </div>

          <div className="flex flex-col justify-between h-full ">
            <div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <div className="mt-16 flex flex-col gap-8">
                <div className="flex gap-2">
                  <img src={dashboard} alt="" />
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="flex gap-2">
                  <img src={chat} alt="" />
                  <Link to="/chat">Chat</Link>
                </div>
                <div className="flex gap-2">
                  <img src={course} alt="" />
                  <Link to="/courses">Courses</Link>
                </div>
                <div className="flex gap-2">
                  <img src={quiz} alt="" />
                  <Link to="/quiz">Quiz</Link>
                </div>
                <div className="flex gap-2">
                  <img src={quiz} alt="" />
                  <Link to="#" onClick={handleLogout}>
                    Logout
                  </Link>
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
      )}
    </>
  );
}

DashboardSIdebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default DashboardSIdebar;
