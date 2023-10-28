

function Form({ handleStartQuiz }) {
  return (
    <>
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
              What course would you like to be quizzed on?
            </option>
            <option value="CSC 201">CSC 201</option>
            <option value="CSC 203">CSC 203</option>
          </select>
        </div>
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
              What course would you like to be quizzed on?
            </option>
            <option value="CSC 201">CSC 201</option>
            <option value="CSC 203">CSC 203</option>
          </select>
        </div>
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
              What course would you like to be quizzed on?
            </option>
            <option value="CSC 201">CSC 201</option>
            <option value="CSC 203">CSC 203</option>
          </select>
        </div>
        <button type="submit" onClick={handleStartQuiz}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
