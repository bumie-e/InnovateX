import logo from "/assets/chat_logo.png";
function Sidebar() {
  return (
    <>
      {/* desktop */}
      <div
        className="hidden lg:block h-full fixed z-10 top-0 left-0 bg-white w-[309px]
      overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px] pl-6 pr-4"
      >
        <div className="flex flex-col ">
          <div>
            <img src={logo} alt="" />

            {/* New Topic */}
            <button
              className="border-[1px] border-pry-col rounded-lg pl-6 py-[22px] w-full
       text-left mt-10 mb-5"
            >
              <img src="" alt="" />
              <span className=" font-semibold text-lg text-pry-col">
                New Topic
              </span>
            </button>

            {/* Topics */}
            <div>
              <p>Topics</p>

              <div>
                <p>You haven&apos;t asked any questions yet</p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <p>Suggestions</p>

            <div>
              <img src="" alt="" />
              <p>Podcasts</p>
              <img src="" alt="" />
            </div>
          </div>

          {/* profile */}
          <div className="flex-between ">
            <div>
              <img src="" alt="" />
              <span>Bunmi Akinremi</span>
            </div>

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className="lg:hidden h-full fixed z-10 top-0 left-0 pl-6 pr-4 w-[309px]
      overflow-x-hidden pt-7 border-[#E6E5EE] border-r-[1px]  bg-white"
      >
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Sidebar;
