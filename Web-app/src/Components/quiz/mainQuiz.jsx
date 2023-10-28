import { useEffect, useState } from "react";
import QuizForm from "./quizForm";

function MainQuiz() {
  const [input, setInput] = useState({
    topic: "",
  });
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  const [showQuiz, setShowQuiz] = useState(false);

  const quizData = {
    questions: {
      "1. What is the time allowed for the exam?": {
        options: ["a)1 hour", "b) 2 hours", "c) 3 hours", "d) 4 hours"],
        answer: "a) 1 hour",
      },
      "2. How many questions are required to be answered in total?": {
        options: ["a) 2", "b) 3", "c) 4", "d) 5"],
        answer: "c) 4",
      },
      "3. Which department offers the CPE401 course?": {
        options: [
          "a) Department of Computer Science",
          "b) Department of Engineering",
          "c) Department of Mathematics",
          "d) Department of Business",
        ],
        answer: "a) Department of Computer Science",
      },
      "4. What is the purpose of using a different booklet for each section?": {
        options: [
          "a) To save paper",
          "b) To make the exam more organized",
          "c) To prevent cheating",
          "d) To make it easier for the students",
        ],
        answer: "b) To make the exam more organized",
      },
      "5. What is the relationship between MIPS and CPI?": {
        options: [
          "a) Directly proportional",
          "b) Inversely proportional",
          "c) No relationship",
          "d) Cannot be determined from the given information",
        ],
        answer: "d) Cannot be determined from the given information",
      },
    },
  };

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);

  const questions = Object.keys(quizData.questions);

  const handleOptionSelect = (question, option) => {
    setSelectedOptions({ ...selectedOptions, [question]: option.trim() });
  };

  const handlePrevious = () => {
    setCurrentQuestion(Math.max(currentQuestion - 1, 1));
  };

  const handleNext = () => {
    setCurrentQuestion(Math.min(currentQuestion + 1, questions.length));
  };

  let correctAnswers = 0;
  const handleQuizSubmit = () => {
    const calculateCorrectAnswers = () => {
      for (const question of questions) {
        console.log(
          selectedOptions[question] === quizData.questions[question].answer
        );
        // console.log(correctAnswers);
        if (selectedOptions[question] === quizData.questions[question].answer) {
          correctAnswers++;
        }
      }
      console.log(correctAnswers);
      return correctAnswers;
    };
    correctAnswers = calculateCorrectAnswers();
    console.log(correctAnswers);

    // Display the result in a modal
    setShowModal(true);
  };

  return (
    <>
      {showQuiz ? (
        <div>
          <h1>Quiz</h1>
          {currentQuestion <= questions.length ? (
            <div>
              <h3>{questions[currentQuestion - 1]}</h3>
              {quizData.questions[questions[currentQuestion - 1]].options.map(
                (option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name={`q${currentQuestion}`}
                      value={option}
                      checked={
                        selectedOptions[questions[currentQuestion - 1]] ===
                        option.trim()
                      }
                      onChange={() =>
                        handleOptionSelect(
                          questions[currentQuestion - 1],
                          option
                        )
                      }
                    />
                    {option}
                  </div>
                )
              )}
              <button onClick={handlePrevious} disabled={currentQuestion === 1}>
                Previous
              </button>
              {currentQuestion === questions.length ? (
                <div>
                  <h3>Quiz Submission</h3>
                  <p>Are you sure you want to submit the quiz?</p>
                  <button onClick={handleQuizSubmit}>Submit</button>
                </div>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length}
                >
                  Next
                </button>
              )}
            </div>
          ) : (
            ""
          )}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>
                  You got {correctAnswers} out of {questions.length} correct
                  answers!
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <QuizForm
          input={input}
          setInput={setInput}
          handleStartQuiz={handleStartQuiz}
        />
      )}
    </>
  );
}

export default MainQuiz;
