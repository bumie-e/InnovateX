import { useEffect, useState } from "react";
import DashboardSIdebar from "../Components/dashboardSIdebar";
import { useSelector } from "react-redux";
import menu from "/assets/menu.png";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  const user = useSelector((state) => state.user);

  function getCourses() {
    fetch(import.meta.env.VITE_COURSES_URL, {
      method: "get",
      headers: {
        apikey: import.meta.env.VITE_COURSE_API_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_COURSE_BEARER_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
  }

  return (
    <>
      <DashboardSIdebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="lg:ml-[309px]">
        {/* desktop */}
        <nav
          className="hidden lg:flex border-[#E6E5EE] border-b-[1px]  
        lg:justify-end px-16 py-5 lg:items-center flex-row"
        >
          <div className="mr-4">
            <img
              className="inline w-5 h-5 mr-1"
              src="/assets/lang.png"
              alt="this"
            />
            English
          </div>
          <div>
            <img className="inline" src="/assets/notes.png" alt="this" /> Notes
          </div>
          <div>
            <img
              className="ml-4 rounded-full h-10 w-10 inline mr-2"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1663362284/samples/people/kitchen-bar.jpg"
              alt="Profile"
            />
            {user.providerData[0].displayName || "User"}
          </div>
        </nav>

        {/* mobile */}
        <nav
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
        px-16 py-4 flex-between"
        >
          <img src={menu} onClick={() => setIsOpen(!isOpen)} alt="menu icon" />
          <p className="font-semibold text-[32px]">Dashboard</p>
          <div></div>
        </nav>

        {/* <Intro /> */}
      </main>
      <main className="lg:ml-[309px]">
        <div className="bg-white min-h-screen p-2 sm:p-[40px]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-xl">Welcome, Bunmi! 👋</h2>
              <h4 className="text-xl mt-10">Your Course</h4>
            </div>

            {/* Courses */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {courses &&
                courses.map((course) => {
                  return (
                    <div
                      key={course.id}
                      className="border rounded col-span-12 sm:col-span-1 xs:mr-[140px]"
                    >
                      <img
                        // className="max-h-11"
                        src="https://res.cloudinary.com/pro-solve/image/upload/v1698385619/scott-graham-5fNmWej4tAA-unsplash_yotsdx.jpg"
                        alt="course"
                      />
                      <div className="pl-6 pt-4 text-[12px] text-[#454545] font-normal">
                        {course.course_code}
                      </div>
                      <h3 className="p-6  mb-4 text-lg font-bold">
                        {course.course_title}
                      </h3>
                      <div className="flex justify-between mr-4">
                        <div>
                          <p className="inline pl-6 text-xs">20% completed</p>
                          <div className="w-20 ml-6 h-2 rounded-full bg-gray-200">
                            <div
                              className="h-2 rounded-full bg-blue-500"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>

                        <button className="mb-4 ml-6 px-4 py-2 text-blue-500 border-solid border-2 border-blue-500 rounded-md">
                          Continue →
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Quizzes */}
            <div className="mb-3 font-medium">Quizzes</div>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="p-6 border rounded bg-[#EBEBF2] col-span-12 sm:col-span-1">
                <h4 className="mb-4 text-lg">Quiz Title</h4>
                <p>20 Questions</p>
              </div>
              <div className="p-6 border rounded bg-[#EBEBF2] col-span-12 sm:col-span-1">
                <h4 className="mb-4 text-lg">Quiz Title</h4>
                <p>20 Questions</p>
              </div>
              <div className="p-6 border rounded bg-[#EBEBF2] col-span-12 sm:col-span-1">
                <h4 className="mb-4 text-lg">Quiz Title</h4>
                <p>20 Questions</p>
              </div>
            </div>

            <div className="mb-3 font-medium">Acheivements</div>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="p-6 border rounded bg-[#EBEBF2] col-span-12 sm:col-span-1">
                <h4 className="mb-4 text-lg">
                  <img alt="medal" src="/assets/medal.png" />
                </h4>
                <p>5 learning modules completed</p>
              </div>
              <div className="p-6 border rounded bg-[#EBEBF2] col-span-12 sm:col-span-1">
                <h4 className="mb-4 text-lg">
                  <img className="inline" alt="medal" src="/assets/medal.png" />
                  <img
                    className="inline"
                    alt="medal"
                    src="/assets/modall.png"
                  />
                </h4>
                <p>10 learning modules completed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
