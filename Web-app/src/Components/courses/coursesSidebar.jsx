import React from "react";

import { PropTypes } from "prop-types";

function CoursesSidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* desktop */}
      <div
        className="hidden lg:block h-full fixed z-10 top-0 left-0 bg-white w-[309px]
      overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px] pl-6 pr-4"
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <div>
              <img src="/assets/chat_logo.png" alt="" />
            </div>
            <div className="mt-8 mb-8">Back to course home</div>
            <hr className="mt-8 mb-8" />
            <div className="mb-8">Computer Science</div>

            <div>
              <p className="inlinetext-xs">20% completed</p>
              <div className="w-20 h-2 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-semibold text-base">
                1.
                <span className="ml-5 font-semibold text-base">
                  Introduction
                </span>
                {/* <div className=" font-semibold text-base">5 Lessons</div> */}
              </div>
            </div>
            <div class="flex items-center gap-x-3 mt-5">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Early days of computing
              </label>
            </div>
            <div class="flex items-center gap-x-3 mb-8">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                The Industrial Revolution
              </label>
            </div>

            <div className="mt-3">
              <div className="font-semibold text-base">
                2.
                <span className="ml-5 font-semibold text-base">
                  How to Get Started
                </span>
                {/* <div className=" font-semibold text-base">5 Lessons</div> */}
              </div>
            </div>

            {/* Topics */}
            <div className=" font-semibold text-base text-[#7C7C8C]">
              <div class="flex items-center gap-x-3 mt-5">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Early days of computing
                </label>
              </div>
              <div class="flex items-center gap-x-3 mb-8">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  The industrial revolution{" "}
                </label>
              </div>

              <hr />
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

          {/* <img src={logo} alt="" /> */}
        </div>
      )}
    </>
  );
}
CoursesSidebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
export default CoursesSidebar;
