import { useState } from "react";
import MainQuiz from "./mainQuiz";

function Intro() {
  const [showForm, setShowForm] = useState(false);

  const handleProceed = () => {
    setShowForm(true);
  };

  return (
    <>
      <div>
        {showForm ? (
          <MainQuiz />
        ) : (
          <div className="p-10">
            <div>
              <p>Welcome, Bunmi!</p>
              <p>What type of quiz do you want take?</p>
            </div>

            <form action="" className=" mt-8 ">
              <label className="mr-[10px]">
                <input
                  type="button"
                  value="Individual Quiz"
                  className="px-6 py-5 border-pry-col rounded-xl"
                />
              </label>
              <label>
                <input
                  type="button"
                  value="Group Quiz"
                  className="px-6 py-5 border-pry-col rounded-xl"
                />
              </label>
              <div
                className="
              pt-10"
              >
                <button
                  className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Intro;
