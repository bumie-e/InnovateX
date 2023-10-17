import Header from "./Components/header";
import Footer from "./Components/footer";
import step_one from "/assets/step_one.png";
import step_two from "/assets/step_two.png";
import step_three from "/assets/step_three.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* hero section */}
        <section className="text-center bg-[#EFECF5] pt-16 lg:pt-[120px]">
          <h1>Unlock Your Learning Potential with Personalized Education</h1>
          <p className="mt-6 mb-10 max-w-[683px] mx-auto">
            An AI-powered content personalization platform that utilizes
            generative AI to explain concepts to any student based on his
            evaluated abilities.
          </p>
          <div>
            <button className=" rounded-lg bg-pry-col mb-5 text-white py-4 px-14">
              Try for Free
            </button>

            <div>
              <img src="" alt="" /> <span>Watch Demo</span>
            </div>
          </div>

          <div className="mx-[25px] mt-20 lg:mt-24">
            <div className="bg-[#2A2957] w-auto h-[502px]  rounded-t-[16px] max-w-[1140px] mx-auto"></div>
          </div>
        </section>

        {/* features */}
        <section className="px-[25px] mx-auto max-w-[1140px] bg-feature-bg">
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading ">FEATURES</p>
            <h2 className=" mt-8 mb-4">Boost Your Study Experience</h2>
            <p className=" sm:max-w-[740px] mx-auto">
              Unlock a world of personalized learning with our dynamic suite of
              tools and resources. Elevate your study experience and discover a
              new way to excel in your education!
            </p>
          </div>

          {/* cards */}
          <div className=" text-[#454545]  card mt-16 bg-feature-bg">
            {/* row one */}
            {/* Dashboard */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Dashboard</h3>
              <p>
                Get an at-a-glance overview of your learning journey and
                achievements and track your progress, view personalized
                recommendations, and manage your quizzes.
              </p>
            </div>

            {/* Chat */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Chat</h3>
              <p>
                Have burning questions? Our AI-powered chat feature is here to
                help! Engage in real-time conversations with our virtual tutor
                to grasp concepts better.
              </p>
            </div>

            {/* row two */}
            {/* Quiz */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Quiz</h3>
              <p>
                Take your learning to the next level with interactive quizzes.
                Choose between individual quizzes for focused review or team
                quizzes for collaborative learning.
              </p>
            </div>

            {/* Language Options */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Language Options</h3>
              <p>
                Choose your preferred learning language from a selection of
                English, French, German, or Japanese. Customize your experience
                to best suit your linguistic preferences.
              </p>
            </div>

            {/* row three */}
            {/* Resource Suggestions */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                Resource Suggestions
              </h3>
              <p>
                Explore a curated list of research papers and podcasts that
                delve deeper into your chosen topics. Expand your understanding
                with additional resources recommended by our AI.
              </p>
            </div>

            {/* Progress Tracker */}
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Progress Tracker</h3>
              <p>
                Visualize your learning journey with our intuitive progress
                tracker. See how far you&apos;ve come and get insights into the
                concepts you&apos;ve mastered.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading ">HOW IT WORKS</p>
            <h2 className=" mt-8 mb-4">
              Embark on Your Personalized Learning Journey
            </h2>
            <p className=" sm:max-w-[740px] mx-auto">
              Master the art of learning with a platform that embraces your
              individuality. Experience an educational journey that molds itself
              around your preferences, giving you the tools to excel in your
              studies and beyond.
            </p>
          </div>

          <div className=" mt-14 lg:mt-[100px] grid place-items-center">
            {/* first */}
            <div className="flex-center flex-col lg:flex-row gap-8 lg:gap-16 mx-6 ">
              <div className=" max-w-[459px]">
                <h3>Step 1: Sign Up</h3>
                <p>
                  Begin your personalized learning journey by creating an
                  account. It&apos;s a simple process that takes just a few
                  moments, and it&apos;s completely free!{" "}
                </p>
              </div>
              <img src={step_one} className="w-[672px]" alt="step_one" />
            </div>

            {/* second */}
            <div
              className="flex-center flex-col  gap-8 lg:gap-16 
            mx-6 my-12 lg:my-[100px] lg:flex-row-reverse"
            >
              <div className=" max-w-[459px]">
                <h3>Step 2: Evaluate Your Abilities</h3>
                <p>
                  This step is all about understanding you better. Answer a set
                  of straightforward questions that are designed to get a sense
                  of your unique learning style and preferences. This
                  information forms the foundation for our AI to deliver
                  explanations and quizzes that are customized just for you.
                </p>
              </div>
              <img src={step_two} className="w-[672px]" alt="step_one" />
            </div>

            {/* three */}
            <div className="flex-center flex-col lg:flex-row gap-8 lg:gap-16 mx-6 ">
              <div className=" max-w-[459px]">
                <h3>Step 3: Start Learning</h3>
                <p>
                  Now it&apos;s time to dive into your own world of learning,
                  crafted especially for you. Explore a range of interactive
                  lessons, engage in real-time chats with our AI, and challenge
                  yourself with quizzes that are designed to match your
                  abilities and interests.
                </p>
              </div>
              <img src={step_three} className="w-[672px]" alt="step_three" />
            </div>

            {/* four */}
            <div
              className="flex-center flex-col gap-8 lg:gap-16 mx-6 
             mt-12 lg:mt-[100px] lg:flex-row-reverse "
            >
              <div className=" max-w-[459px]">
                <h3>Step 4: Track Your Progress</h3>
                <p>
                  Keep a finger on the pulse of your learning journey with our
                  easy-to-use progress tracker. It&apos;s like having a personal
                  roadmap of your accomplishments. Use it to identify areas
                  where you&apos;re excelling and spots where you might want to
                  focus a bit more. Celebrate your successes along the way!
                </p>
              </div>
              <img src={step_two} className="w-[672px]" alt="step_one" />
            </div>
          </div>
        </section>

        {/* pricing */}
        <section className=" mx-auto max-w-[1140px] pb-16 lg:pb-20">
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading ">PRICING</p>
            <h2 className=" mt-8 mb-4">There&apos;s a Plan for Everyone</h2>
            <p className=" sm:max-w-[740px] mx-auto">
              Discover how our platform is making a difference in the lives of
              students. Read what our early adopters have to say about their
              personalized learning journey with us.
            </p>
          </div>

          {/*pricing cards */}
          <div className="grid gap-[28px] grid-cols-1 lg:grid-cols-3 place-items-center mt-16">
            <div
              className=" py-10 px-[68px] border-[#D1CDD7] border-[1px] 
             rounded-xl"
            >
              <p className=" font-semibold text-2xl">Basic</p>
              <div className="">
                <ul className=" font-normal text-xl  mt-6 mb-8">
                  <li>1 Week duration </li>
                  <li>6 Credits</li>
                </ul>
                <p className=" font-bold text-2xl">$1.00</p>
              </div>

              <button
                className="text-pry-col border-pry-col border-[1px] py-[18px]
                px-5 lg:px-10 font-semibold text-base mt-10 rounded-lg"
              >
                Try for Free
              </button>
            </div>

            {/* Silver */}
            <div
              className=" py-10 px-[68px] border-[#D1CDD7] border-[1px] 
             rounded-xl"
            >
              <p className=" font-semibold text-2xl">Silver</p>
              <div className="">
                <ul className=" font-normal text-xl  mt-6 mb-8">
                  <li>1 Month duration</li>
                  <li>60 Credits</li>
                </ul>
                <p className=" font-bold text-2xl">$10.00</p>
              </div>

              <button
                className="text-pry-col border-pry-col border-[1px] py-[18px]
                px-5 lg:px-10 font-semibold text-base mt-10 rounded-lg"
              >
                Try for Free
              </button>
            </div>

            {/* Gold */}
            <div
              className=" py-10 px-[68px] border-[#D1CDD7] border-[1px] 
             rounded-xl"
            >
              <p className=" font-semibold text-2xl">Gold</p>
              <div className="">
                <ul className=" font-normal text-xl  mt-6 mb-8">
                  <li>1 Year duration</li>
                  <li>6 Credits</li>
                </ul>
                <p className=" font-bold text-2xl">$100.00</p>
              </div>

              <button
                className="text-pry-col border-pry-col border-[1px] py-[18px]
                px-5 lg:px-10 font-semibold text-base mt-10 rounded-lg"
              >
                Try for Free
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className=" mx-auto max-w-[1140px] pb-16 lg:pb-20">
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading ">TESTIMONIALS</p>
            <h2 className=" mt-8 mb-4">Here&apos;s What Our Users Say</h2>
            <p className=" sm:max-w-[740px] mx-auto">
              Discover how our platform is making a difference in the lives of
              students. Read what our early adopters have to say about their
              personalized learning journey with us.
            </p>
          </div>

          <div className="flex gap-[28px] overflow-x-auto">
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <p>
                Get an at-a-glance overview of your learning journey and
                achievements and track your progress, view personalized
                recommendations, and manage your quizzes.
              </p>

              <span className=" font-bold text-base">Bunmi Akinremi</span>
            </div>
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <p>
                Get an at-a-glance overview of your learning journey and
                achievements and track your progress, view personalized
                recommendations, and manage your quizzes.
              </p>

              <span className=" font-bold text-base">Bunmi Akinremi</span>
            </div>
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl">
              <img src="" alt="" />
              <p>
                Get an at-a-glance overview of your learning journey and
                achievements and track your progress, view personalized
                recommendations, and manage your quizzes.
              </p>

              <span className=" font-bold text-base">Bunmi Akinremi</span>
            </div>
          </div>
        </section>

        <section className="text-center start-learning px-6 py-12 mx-4 lg:mx-auto max-w-7xl">
          <h2>Start Your Journey to Personalized Learning</h2>

          <div className=" lg:flex-center gap-8 mt-12">
            <button className=" rounded-lg bg-pry-col mb-5 text-white py-4 px-14">
              Try for Free
            </button>

            <div>
              <img src="" alt="" /> <span>Watch Demo</span>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="bg-[#EEEDF5]">
          <div
            className="flex flex-col items-center lg:items-start justify-center py-16 lg:py-[120px] px-4 lg:flex-row gap-5
           lg:gap-10  max-w-lg mx-auto lg:max-w-7xl"
          >
            <div></div>
            <h2 className=" text-left self-start">Frequently Asked Question</h2>

            {/* faqs */}
            <div className=" max-w-lg mt-10 lg:mt-0">
              {/*     What is personalized content learning? */}
              <div>
                <details className="group" open>
                  <summary
                    className="flex cursor-pointer list-none items-center
                   justify-between py-4 text-lg lg:text-[22px] font-semibold 
                   text-secondary-900 group-open:text-primary-500"
                  >
                    What is personalized content learning?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    This is the first item&apos;s accordion body.
                  </div>
                </details>
              </div>

              {/* How do I get started with the platform? */}
              <div>
                <details className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between 
                  py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500"
                  >
                    How do I get started with the platform?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                    answer a few questions to help us understand your learning
                    preferences, and you&apos;ll be on your way to personalized
                    learning.
                  </div>
                </details>
              </div>

              {/* How does the evaluation process work? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    How does the evaluation process work?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 tfont-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>

              {/* Can I change my evaluated abilities later? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Can I change my evaluated abilities later?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>

              {/* What subjects and languages are available on the platform? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    What subjects and languages are available on the platform?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>

              {/* Can I use the platform on mobile devices? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Can I use the platform on mobile devices?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>

              {/* Is there a free trial available?*/}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Is there a free trial available?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
