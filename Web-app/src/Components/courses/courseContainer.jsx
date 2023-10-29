import React from "react";

import { useNavigate } from "react-router-dom";

const CourseContainer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/aiChat"); // assuming '/course' is the route where <CoursePage /> is rendered
  };
  return (
    <>
      <div className="m-8">
        <div className="text-[#454545] font-sm text-[40px]">Introduction</div>

        <div className="mt-8 font-bold">Early days of computing</div>

        <div className="mt-4">
          That's great! Differential calculus is an essential branch of
          mathematics that deals with the concept of rates of change and slopes
          of curves. To get started, you'll want to familiarize yourself with
          some basic concepts and techniques. Here's a brief overview of what
          you'll need to learn
        </div>
        <div className="flex justify-between">
          <div className="mt-8 font-bold">Rise of machines</div>
          <div className="mt-8 font-sm pl-4 pr-4 rounded-lg border bg-[#E6E5EE]">
            <button onClick={handleButtonClick}>AI Chat</button>
          </div>
        </div>

        <div className="mt-4">
          That's great! Differential calculus is an essential branch of
          mathematics that deals with the concept of rates of change and slopes
          of curves. To get started, you'll want to familiarize yourself with
          some basic concepts and techniques. Here's a brief overview of what
          you'll need to learn
        </div>

        <div className="mt-8 font-bold">Early days of computing</div>

        <div className="mt-4">
          That's great! Differential calculus is an essential branch of
          mathematics that deals with the concept of rates of change and slopes
          of curves. To get started, you'll want to familiarize yourself with
          some basic concepts and techniques. Here's a brief overview of what
          you'll need to learn
        </div>

        <div className="mt-8 font-bold">Rise of machines</div>
        <div className="mt-4">
          That's great! Differential calculus is an essential branch of
          mathematics that deals with the concept of rates of change and slopes
          of curves. To get started, you'll want to familiarize yourself with
          some basic concepts and techniques. Here's a brief overview of what
          you'll need to learn
        </div>

        <div className="text-[#43428C] mt-8 mb-8">Additional Resources</div>
        <div>1. Applied Computer Science</div>
        <div>2. Advanced Computer Science</div>
        <div>3. Computer Science for Newbies</div>

        <hr className="mt-8 mb-8" />

        <div className="text-right">
          <button class="mr-6 bg-transparent hover:bg-blue-500 text-[#5250CD] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Mark as Completed
          </button>

          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseContainer;
