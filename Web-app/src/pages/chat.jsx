import ChatSideBar from "../Components/chatSidebar";
function Chat() {
  return (
    <>
      <ChatSideBar />
      <main className="ml-[309px]">
        {/* desktop */}
        <header
          className="hidden lg:flex items-center border-[#E6E5EE] border-b-[1px]  
        lg:justify-between px-16 py-9"
        >
          {" "}
          <p className="font-semibold text-[32px]">Chat</p>
          <div>
            <img src="" alt="" />
            <p>Take a quiz</p>
          </div>
        </header>

        {/* mobile */}
        <header className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] px-16 py-9">
          <p className="font-semibold text-[32px]">Chat</p>
        </header>
      </main>
    </>
  );
}

export default Chat;
