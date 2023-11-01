import logo from "/assets/chat_logo.png";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import plus from "/assets/dashboard/plus.png";
import User from "/assets/dashboard/User.png";
import more from "/assets/dashboard/more.png";
import podcast from "/assets/dashboard/podcast.png";
// import videos from "/assets/dashboard/videos.png";
import right from "/assets/dashboard/ci_chevron-right.png";
import research from "/assets/dashboard/mdi_papers-outlineresearch.png";
function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* desktop */}
      <div
        className="hidden lg:block h-full fixed z-10 top-0 left-0 bg-white w-[309px]
      overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px] pl-6 pr-4"
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>

            {/* New Topic */}
            <button
              className="border-[1px] border-pry-col rounded-lg pl-6 py-[22px] w-full
                text-left mt-10 mb-5 flex items-center "
            >
              <img src={plus} alt="" />
              <span className="ml-6 font-semibold text-lg text-pry-col">
                New Topic
              </span>
            </button>

            {/* Topics */}
            <div className=" font-semibold text-base text-[#7C7C8C]">
              <p>Topics</p>

              <div>
                <p>You haven&apos;t asked any questions yet</p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className=" border-t-[#E6E5EE] border-t-[1px] pt-5">
            <p>Suggestions</p>

            {/* podcasts */}
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/podcast" className="flex-between">
                <div className="flex gap-3 items-center">
                  <img src={podcast} alt="" />
                  <p>Podcasts</p>
                </div>
                <img src={right} alt="" />
              </Link>

              <div className="flex-between">
                <div className="flex gap-3 items-center">
                  <img src={research} alt="" />
                  <p>Research Papers</p>
                </div>
                <img src={right} alt="" />
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
          <div className="flex flex-col justify-between h-full ">
            <div
              className="absolute top-10 right-0 bg-pry-col text-white py-2 px-4 "
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </div>

            <div>
              <Link to="/dashboard">
                <img src={logo} alt="" />
              </Link>

              {/* New Topic */}
              <button
                className="border-[1px] border-pry-col rounded-lg pl-6 py-[22px] w-full
                text-left mt-10 mb-5 flex items-center "
              >
                <img src={plus} alt="" />
                <span className="ml-6 font-semibold text-lg text-pry-col">
                  New Topic
                </span>
              </button>

              {/* Topics */}
              <div className=" font-semibold text-base text-[#7C7C8C]">
                <p>Topics</p>

                <div>
                  <p>You haven&apos;t asked any questions yet</p>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className=" border-t-[#E6E5EE] border-t-[1px] pt-5">
              <p>Suggestions</p>

              {/* podcasts */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex-between">
                  <div className="flex gap-3 items-center">
                    <img src={podcast} alt="" />
                    <p>Podcasts</p>
                  </div>
                  <img src={right} alt="" />
                </div>

                <div className="flex-between">
                  <div className="flex gap-3 items-center">
                    <img src={research} alt="" />
                    <p>Research Papers</p>
                  </div>
                  <img src={right} alt="" />
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
      )}
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
export default Sidebar;
