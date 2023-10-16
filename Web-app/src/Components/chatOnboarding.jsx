import { useState } from "react";

function ChatOnboarding() {
  return (
    <>
      <div className=" mt-6  lg:mt-12 ml-12 lg:ml-[100px]">
        <div>
          <p>Welcome, Bunmi!</p>
          <p>
            To serve you better, kindly select your learning preferences below
          </p>
        </div>

        <form className=" mb-8 shadow-chat-onboarding p-8 lg:mr-[100px] max-w-[749px]">
          {/* one */}
          <div>
            <p>
              1. Are you looking for introductory explanation or more insights?
            </p>
            <div className=" mt-3 ">
              <input type="radio" name="intro" className="mr-2" id="intro" />
              <label htmlFor="intro">Introductory explanation</label>
            </div>

            <div>
              <input type="radio" className="mr-2" name="intro" id="intro" />
              <label htmlFor="intro">Advanced insights</label>
            </div>
          </div>

          {/* two */}
          <div className=" my-6">
            <p>
              2. Would you like explanations to start from the basics or assume
              prior understanding?
            </p>
            <div className=" mt-3 ">
              <input type="radio" name="intro" className="mr-2" id="intro" />
              <label htmlFor="intro">Basics</label>
            </div>

            <div>
              <input type="radio" className="mr-2" name="intro" id="intro" />
              <label htmlFor="intro">Assume little understanding</label>
            </div>
          </div>

          {/* three */}
          <div className=" my-6">
            <p>3. Do you prefer concise explanation or in depth exploration?</p>
            <div className=" mt-3 ">
              <input type="radio" name="intro" className="mr-2" id="intro" />
              <label htmlFor="intro">Concise</label>
            </div>

            <div>
              <input type="radio" className="mr-2" name="intro" id="intro" />
              <label htmlFor="intro">In depth</label>
            </div>
          </div>

          {/* four */}
          <div className=" my-6">
            <p>
              4.Do you want interactive elements like quizzes, exercises or
              simulations
            </p>
            <div className=" mt-3 ">
              <input type="radio" name="intro" className="mr-2" id="intro" />
              <label htmlFor="intro">Yes</label>
            </div>

            <div>
              <input type="radio" className="mr-2" name="intro" id="intro" />
              <label htmlFor="intro">No</label>
            </div>
          </div>

          <button className=" rounded-lg py-[18px] px-14 bg-pry-col text-white">
            Proceed to Chat
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatOnboarding;
