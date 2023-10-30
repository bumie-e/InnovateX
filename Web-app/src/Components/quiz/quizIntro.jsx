import { useState } from "react";
import { useSelector } from "react-redux";
import MainQuiz from "./mainQuiz";

function Intro() {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);

  const handleProceed = () => {
    setShowForm(true);
  };

  return (
    <>
      <div>
        {showForm ? (
          <MainQuiz />
        ) : (
          <div className="p-10 text-center">
            <div>
              <h1 className="mb-6">
                Welcome, {user.providerData[0].displayName || "User"}!
              </h1>
              {/* <p>What type of quiz do you want take?</p> */}
            </div>

            {/* <form action="" className=" mt-8 ">
              <label className="mr-[10px]">
                <input
                  type="button"
                  value="Quiz"
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
              ></div>
            </form> */}
            <button
              className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
              onClick={handleProceed}
            >
              Proceed to Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Intro;
