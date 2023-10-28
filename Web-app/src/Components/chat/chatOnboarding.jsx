// import { useState } from "react";
import PropTypes from "prop-types";
function ChatOnboarding({ getNextStep, input, handleFormChange }) {
  return (
    <>
      <div className=" mt-6  lg:mt-12 ml-12 lg:ml-[100px]">
        <div>
          <p>Welcome, Bunmi!</p>
          <p>
            To serve you better, kindly select your learning preferences below
          </p>
        </div>

        <form
          onSubmit={getNextStep}
          className=" mb-8 shadow-chat-onboarding p-8 lg:mr-[100px] max-w-[749px]"
        >
          {/* one */}
          <div>
            <p>
              1. Are you looking for introductory explanation or more insights?
            </p>
            <div className=" mt-3 ">
              <input
                type="radio"
                value="Introductory explanations"
                name="explanation_level"
                className="mr-2"
                id="intro"
                checked={
                  input.explanation_level === "Introductory explanations"
                }
                onChange={handleFormChange}
              />
              <label htmlFor="intro">Introductory explanation</label>
            </div>

            <div>
              <input
                type="radio"
                className="mr-2"
                value="Advanced insights"
                name="explanation_level"
                id="intro"
                checked={input.explanation_level === "Advanced insights"}
                onChange={handleFormChange}
              />
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
              <input
                type="radio"
                value="Little"
                name="prior_knowledge"
                className="mr-2"
                id="intro"
                checked={input.prior_knowledge === "Little"}
                onChange={handleFormChange}
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
                checked={input.prior_knowledge === "Prior"}
                onChange={handleFormChange}
              />
              <label htmlFor="intro">Assume little understanding</label>
            </div>
          </div>

          {/* three */}
          <div className=" my-6">
            <p>3. Do you prefer concise explanation or in depth exploration?</p>
            <div className=" mt-3 ">
              <input
                type="radio"
                value="Concise"
                name="explanation_type"
                className="mr-2"
                id="intro"
                checked={input.explanation_type === "Concise"}
                onChange={handleFormChange}
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
                checked={input.explanation_type === "In-depth explorations"}
                onChange={handleFormChange}
              />
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
              <input
                type="radio"
                value="Yes"
                name="interaction_needed"
                className="mr-2"
                id="intro"
                checked={input.interaction_needed === "Yes"}
                onChange={handleFormChange}
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
                checked={input.interaction_needed === "No"}
                onChange={handleFormChange}
              />
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

ChatOnboarding.propTypes = {
  getNextStep: PropTypes.func,
  handleFormChange: PropTypes.func,
  input: PropTypes.object,
};
export default ChatOnboarding;
