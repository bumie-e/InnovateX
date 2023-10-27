import { useState } from "react";
import QuizForm from "./quizForm";

function MainQuiz() {
  const [input, setInput] = useState({
    topic: "",
  });
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  function handleSelectChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    try {
      console.log("hgjhj");
    } catch (error) {
      console.log(error);
    }
  }
  function handleQuizSubmission(e) {
    e.preventDefault();
    try {
      console.log("hgjhj");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {showQuiz ? (
        <div>
          <div className="mx-auto max-w-3xl px-5">
            <div className="flex-between">
              <h2>Differential Calculus Quiz</h2>

              <p>10 Questions</p>
            </div>
            <form action="">
              <div className="flex flex-col  w-full">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value=""
                  placeholder="Select your Gender"
                  // onChange={handleChange}
                  className=" border-[#D0D5DD] border-[1px] py-[10px] px-14px rounded-lg outline-none"
                >
                  <option value="" defaultValue>
                    Select your Gender
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <QuizForm handleStartQuiz={handleStartQuiz} />
      )}
    </>
  );
}

export default MainQuiz;
