import { useState } from "react";

function MainQuiz() {
  const [input, setInput] = useState({
    topic: "",
  });

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
  return (
    <>
      <div>
        <div>
          <h2>Differential Calculus Quiz</h2>

          <p>10 Questions</p>
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
    </>
  );
}

export default MainQuiz;
