import DashboardSIdebar from "../Components/dashboardSIdebar";
import menu from "/assets/menu.png";

import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";


const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/course");
  };

  useEffect(() => {
    if (isModalOpen) {
      // Add a click event listener to close the modal when clicking outside of it
      const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal();
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        // Cleanup the event listener when the modal is closed
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <DashboardSIdebar isOpen={isOpen} setIsOpen={setIsOpen} />
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
            {user.providerData[0].displayName || "User"}
          </div>
        </nav>

        {/* mobile */}
        <nav
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
             px-16 py-4 flex-between"
        >
          <img src={menu} onClick={() => setIsOpen(!isOpen)} alt="menu icon" />
          <p className="font-semibold text-[32px]">Courses</p>
          <div></div>
        </nav>

        {/* <Intro /> */}
      </main>

      <main className="lg:ml-[309px]">
        <div className="bg-white min-h-screen p-2 sm:p-[40px]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-[#565656]">courses/</span> Computer Science
            </div>
            <div className="bg-[#EBEBF2] pb-8 pt-8 pl-4">Computer Science</div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4">
                <div className="mt-7 text-[#212121] font-semibold text-base">
                  Course Overview
                </div>
                <div className="mt-4 text-[#454545] text-lg">
                  That&apos;s great! Differential calculus is an essential
                  branch of mathematics that deals with the concept of rates of
                  change and slopes of curves. To get started, you&apos;ll want
                  to familiarize yourself with some basic concepts and
                  techniques. Here&apos;s a brief overview of what you&apos;ll
                  need to learn... Show More
                </div>
                <div className="mt-8 font-semibold text-base">
                  Course Contents
                </div>

                <div className="mt-3">
                  <div className="font-semibold text-base">
                    1.
                    <span className="ml-5 font-semibold text-base">
                      Introduction
                    </span>
                    {/* <div className=" font-semibold text-base">5 Lessons</div> */}
                  </div>
                </div>
                <div className="flex items-center gap-x-3 mt-5">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Early days of computing
                  </label>
                </div>
                <div className="flex items-center gap-x-3 mb-8">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    The Industrial Revolution
                  </label>
                </div>
                <hr />

                <div className="mt-3">
                  <div className="font-semibold text-base">
                    2.
                    <span className="ml-5 font-semibold text-base">
                      How to Get Started
                    </span>
                    {/* <div className=" font-semibold text-base">5 Lessons</div> */}
                  </div>
                </div>

                <div className="flex items-center gap-x-3 mt-5">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    The slope of the tangent line to the graph of the function
                    at a given point
                  </label>
                </div>
                <div className="flex items-center gap-x-3 mb-8">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    The area under the curve of the function
                  </label>
                </div>

                <hr />

                <div className="mt-8 font-semibold text-base">
                  Reference Materials
                </div>
                <div>1. Applied Computer Science</div>
                <div>2. Advanced Computer Science</div>
                <div>3. Computer Science for Newbies</div>
              </div>

              <div className="col-span-2 mt-7">
                <button
                  onClick={openModal}
                  className="bg-[#5250CD] mb-8 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  //                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  // className="bg-[#5250CD] mb-8 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md"
                >
                  Start Course
                </button>

                {isModalOpen && (
                  <div className="fixed top-0 left-0 right-0 z-50 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto bg-gray-500 shadow-lg">
                    <div className="relative w-full max-w-2xl mx-auto">
                      <div className="relative bg-white rounded-lg shadow p-4">
                        <div className="flex items-start justify-between border-b rounded-t p-4">
                          <h3 className="text-xl font-semibold text-gray-900"></h3>
                          <button onClick={closeModal}>X</button>
                        </div>

                        <form className=" mb-8 shadow-chat-onboarding p-8 lg:mr-[100px] max-w-[749px]">
                          <div>
                            <div className="mb-8">
                              Before you proceed, kindly answer the short
                              evaluation questions below. This will be used to
                              tailor the course contents to your preferences.
                            </div>
                            <p>
                              1. Are you looking for introductory explanation or
                              more insights?
                            </p>
                            <div className=" mt-3 ">
                              <input
                                type="radio"
                                value="Introductory explanations"
                                name="explanation_level"
                                className="mr-2"
                                id="intro"
                                // checked={
                                //   input.explanation_level ===
                                //   "Introductory explanations"
                                // }
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">
                                Introductory explanation
                              </label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                className="mr-2"
                                value="Advanced insights"
                                name="explanation_level"
                                id="intro"
                                // checked={
                                //   input.explanation_level ===
                                //   "Advanced insights"
                                // }
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">Advanced insights</label>
                            </div>
                          </div>

                          {/* two */}
                          <div className=" my-6">
                            <p>
                              2. Would you like explanations to start from the
                              basics or assume prior understanding?
                            </p>
                            <div className=" mt-3 ">
                              <input
                                type="radio"
                                value="Little"
                                name="prior_knowledge"
                                className="mr-2"
                                id="intro"
                                // checked={input.prior_knowledge === "Little"}
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">Basics</label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                value="Prior"
                                className="mr-2"
                                name="prior_knowledge"
                                id="intro"
                                // checked={input.prior_knowledge === "Prior"}
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">
                                Assume little understanding
                              </label>
                            </div>
                          </div>

                          {/* three */}
                          <div className=" my-6">
                            <p>
                              3. Do you prefer concise explanation or in depth
                              exploration?
                            </p>
                            <div className=" mt-3 ">
                              <input
                                type="radio"
                                value="Concise"
                                name="explanation_type"
                                className="mr-2"
                                id="intro"
                                // checked={input.explanation_type === "Concise"}
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">Concise</label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                className="mr-2"
                                name="explanation_type"
                                id="intro"
                                value="In-depth explorations"
                                // checked={
                                //   input.explanation_type ===
                                //   "In-depth explorations"
                                // }
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">In depth</label>
                            </div>
                          </div>

                          {/* four */}
                          <div className=" my-6">
                            <p>
                              4.Do you want interactive elements like quizzes,
                              exercises or simulations
                            </p>
                            <div className=" mt-3 ">
                              <input
                                type="radio"
                                value="Yes"
                                name="interaction_needed"
                                className="mr-2"
                                id="intro"
                                // checked={input.interaction_needed === "Yes"}
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">Yes</label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                value="No"
                                className="mr-2"
                                name="interaction_needed"
                                id="intro"
                                // checked={input.interaction_needed === "No"}
                                // onChange={handleFormChange}
                              />
                              <label htmlFor="intro">No</label>
                            </div>
                          </div>


                          <button
                            onClick={handleButtonClick}
                            className=" rounded-lg py-[18px] px-14 bg-pry-col text-white"
                          >

                         

                            Save and Proceed
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                <div className="max-w-sm rounded-lg overflow-hidden shadow-sm border">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      Upload additional materials
                    </div>
                    <p className="text-gray-700 text-base">
                      You can upload your class notes, extra course materials
                      that you have. Our AI will use them in tailoring the
                      course contents for you.
                    </p>
                  </div>
                  <div
                    className="mr-7 ml-7 text-xs mb-8 text-center px-6 pt-4 pb-8
                   bg-gray-200 rounded-lg center font-semibold text-gray-700"
                  >
                    <div
                      className="place-self-center text-center place-items-center
                     place-content-center self-center items-center content-center"
                    >
                      <img
                        className="place-self-center text-center place-items-center place-content-center self-center items-center content-center"
                        src="/assets/upload.png"
                        alt="upload"
                      />
                    </div>
                    <span>Upload additional materials</span>
                    <div>Browse files</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Courses;
