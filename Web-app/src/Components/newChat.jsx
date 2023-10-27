import { useEffect, useRef } from "react";
import send from "/assets/send.png";
import PropTypes from "prop-types";
// import ChatOnboarding from "../Components/chatOnboarding";

function NewChat({
  input,
  handleFormChange,
  messages,
  // setMessages,
  handleChat,
}) {
  // const [input, setInput] = useState(""); // User input
  // const [messages, setMessages] = useState([
  //   // Initial bot message
  //   {
  //     text: "Welcome! How can I assist you?",
  //     isUser: false,
  //   },
  // ]); // Chat history
  const chatLogRef = useRef(null);
  // Function to scroll to the bottom of the message container
  const scrollToBottom = () => {
    chatLogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Initially, and whenever the messages change, scroll to the bottom
    scrollToBottom();
  }, [messages]);

  // Function to handle user input and send a message
  // const handleUserMessage = (e) => {
  //   e.preventDefault();
  //   if (input.trim() === "") return;

  //   const userMessage = { text: input, isUser: true };
  //   const botResponse = "This is a simulated bot response."; // Simulated bot response; replace with your actual API call

  //   // Add the user's message and the bot's response to the chat history
  //   setMessages([
  //     ...messages,
  //     userMessage,
  //     { text: botResponse, isUser: false },
  //   ]);
  //   setInput(""); // Clear the input field

  //   // scrollToBottom();
  // };

  return (
    <>
      {
        // If there are no messages, show the onboarding message
        // if form is successful, return chat, else return onboarding
        // messages.length === 0 ? (
        //   <ChatOnboarding />
      }

      <div className="relative h-[80vh]">
        {messages.map((message, index) => (
          <div
            className={`message ${
              message.isUser ? "user flex-row-reverse" : "bot bg-[#F6F6FB]"
            } max-w-5xl px-9 lg:px-20`}
            key={index}
          >
            {message.isUser ? (
              <div className="flex   items-start justify-end">
                <div className=" p-2 ">{message.text}</div>
                <img
                  src="user-image.jpg" // User profile image URL
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
              </div>
            ) : (
              <div className="flex items-start">
                <img
                  src="bot-image.jpg" // Bot profile image URL
                  alt="Bot"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className=" p-2 rounded-lg">{message.text}</div>
              </div>
            )}
          </div>
        ))}

        {/* add this empty div to scroll into view */}
        <div className=" h-40" ref={chatLogRef}></div>

        {/* form */}
        <div className="fixed bottom-9 z-10 left-0 right-0 lg:ml-[309px] ">
          <div className="grid place-items-center">
            <div className=" ">
              <form
                action=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="relative w-fit"
              >
                <input
                  className="w-[400px] "
                  type="text"
                  name="topic"
                  placeholder="Type your message..."
                  value={input.topic}
                  onChange={handleFormChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent the default behavior
                    }
                  }}
                  autoFocus
                />
                <img
                  src={send}
                  onClick={handleChat}
                  alt=""
                  className="absolute right-3 "
                />
                {/* <button>Send</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

NewChat.propTypes = {
  setMessages: PropTypes.func,
  handleChat: PropTypes.func,
  handleFormChange: PropTypes.func,
  input: PropTypes.object,
  messages: PropTypes.array,
};
export default NewChat;
