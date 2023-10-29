import React from "react";
import CourseContainer from "./../courses/courseContainer";

const AiChat = () => {
  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <div className="m-8 col-span-2 ">
          <div className="text-[#454545] font-sm text-[40px]">Introduction</div>

          <div className="mt-8 font-bold">Early days of computing</div>

          <div className="mt-4">
            That's great! Differential calculus is an essential branch of
            mathematics that deals with the concept of rates of change and
            slopes of curves. To get started, you'll want to familiarize
            yourself with some basic concepts and techniques. Here's a brief
            overview of what you'll need to learn
          </div>
          <div className="flex justify-between">
            <div className="mt-8 font-bold">Rise of machines</div>
          </div>

          <div className="mt-4">
            That's great! Differential calculus is an essential branch of
            mathematics that deals with the concept of rates of change and
            slopes of curves. To get started, you'll want to familiarize
            yourself with some basic concepts and techniques. Here's a brief
            overview of what you'll need to learn
          </div>

          <div className="mt-8 font-bold">Early days of computing</div>

          <div className="mt-4">
            That's great! Differential calculus is an essential branch of
            mathematics that deals with the concept of rates of change and
            slopes of curves. To get started, you'll want to familiarize
            yourself with some basic concepts and techniques. Here's a brief
            overview of what you'll need to learn
          </div>

          <div className="mt-8 font-bold">Rise of machines</div>
          <div className="mt-4">
            That's great! Differential calculus is an essential branch of
            mathematics that deals with the concept of rates of change and
            slopes of curves. To get started, you'll want to familiarize
            yourself with some basic concepts and techniques. Here's a brief
            overview of what you'll need to learn
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
        <div className="mt-8 mr-8">
          <div className="flex justify-between mb-8">
            <div>AI Chat</div>
            <div>X</div>
          </div>
          <div className="bg-[#F6F6FB] pt-8 pb-8 flex justify-between">
            <div className="mr-4 ml-4">
              <img src="/assets/sign.png" alt="sign" />
            </div>
            <div>Welcome onboard, Bunmi. What question do you have?</div>
          </div>
          <hr />
          <div className="flex justify-end  mt-8 mb-8 text-right">
            <div className="mr-3">I want to learn differential calculus</div>
            <div>
              <img
                className="rounded-full"
                width="30px"
                height="20px"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1663362288/samples/people/boy-snow-hoodie.jpg"
                alt="this"
              />
            </div>
          </div>
          <hr />

          <div class="h-auto grid grid-rows-4 grid-flow-col gap-4">
            <div className="bg-[#F6F6FB] pt-8 pb-8 flex grid grid-cols-3 gap-0">
              <div className="mr-4 ml-4 col-span-1">
                <img src="/assets/sign.png" alt="signed" />
              </div>
              <div className="col-span-2 pr-2">
                That's great! Differential calculus is an essential branch of
                mathematics that deals with the concept of rates of change and
                slopes of curves. To get started, you'll want to familiarize
                yourself with some basic concepts and techniques. Here's a brief
                overview of what you'll need to learn: 1. Understanding Limits:
                - Limits are foundational to calculus. They represent values
                that a function approaches as the input approaches a certain
                value. 2. Derivatives: - Derivatives measure how a function
                changes{" "}
              </div>
            </div>
            {/* <div
              style={{ height: "30px" }}
              className=" flex justify-end bg-[#F6F6FB] row-auto"
            > */}
            <input
              style={{ height: "50px" }}
              className="mt-8 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiChat;
