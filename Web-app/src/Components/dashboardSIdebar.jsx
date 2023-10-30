import logo from "/assets/chat_logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { setLogin } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.config";
import User from "/assets/dashboard/User.png";
import more from "/assets/dashboard/more.png";
import chat from "/assets/dashboard/chat.png";
import dashboard from "/assets/dashboard/dashboard.png";
import quiz from "/assets/dashboard/quiz.png";
import course from "/assets/dashboard/course.png";

function DashboardSIdebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // const auth = getAuth();
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
        toast("Log out error", error);
      });
  };

  return (
    <>
      <ToastContainer />
      {/* desktop */}
      <div
        className="hidden lg:block h-full fixed z-10 top-0 left-0 bg-white w-[309px]
          overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px] pl-6 pr-4"
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <Link a to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="mt-16 flex flex-col gap-8">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                }
                to="/dashboard"
              >
                <div className="flex gap-2">
                  <img src={dashboard} alt="" />
                  <span>Dashboard</span>
                </div>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                }
                to="/chat"
              >
                <div className="flex gap-2">
                  <img src={chat} alt="" />
                  <span>Chat</span>
                </div>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                }
                to="/courses"
              >
                <div className="flex gap-2">
                  <img src={course} alt="" />
                  <span>Courses</span>
                </div>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                }
                to="/quiz"
              >
                <div className="flex gap-2">
                  <img src={quiz} alt="" />
                  <span>Quiz</span>
                </div>
              </NavLink>

              <div className=" cursor-pointer" onClick={handleLogout}>
                <div className="flex gap-2">
                  <img src={quiz} alt="" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>

          {/* profile */}
          <div className="flex-between py-8 ">
            <div className="flex items-end gap-2">
              <img src={User} alt="" />
              <span>Bunmi Akinremi</span>
            </div>

            <img src={more} alt="" />
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                  }
                  exact
                  to="/dashboard"
                >
                  <div className="flex gap-2">
                    <img src={dashboard} alt="" />
                    <span>Dashboard</span>
                  </div>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                  }
                  to="/chat"
                >
                  <div className="flex gap-2">
                    <img src={chat} alt="" />
                    <span>Chat</span>
                  </div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                  }
                  to="/courses"
                >
                  <div className="flex gap-2">
                    <img src={course} alt="" />
                    <span>Courses</span>
                  </div>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#EAE9F9] p-3 rounded-lg" : ""
                  }
                  to="/quiz"
                >
                  <div className="flex gap-2">
                    <img src={quiz} alt="" />
                    <span>Quiz</span>
                  </div>
                </NavLink>

                <Link to="#" onClick={handleLogout}>
                  <div className="flex gap-2">
                    <img src={quiz} alt="" />
                    <span>Logout</span>
                  </div>
                </Link>
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
