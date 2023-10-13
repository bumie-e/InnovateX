import Header from "./Components/header";
import Footer from "./Components/footer";
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
          <div className=" text-[#454545]  card">
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
