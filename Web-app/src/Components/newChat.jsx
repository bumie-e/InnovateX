import { useEffect, useRef, useState } from "react";
import ChatOnboarding from "../Components/chatOnboarding";

function NewChat() {
  const [input, setInput] = useState(""); // User input
  const [messages, setMessages] = useState([]); // Chat history
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
  const handleUserMessage = () => {
    if (input.trim() === "") return;

    // Add the user message to the chat history
    setMessages([...messages, { text: input, isUser: true }]);

    // Here, you would send the user message to your backend for processing
    // Receive the bot's response and add it to the chat history

    // For this example, we'll simulate a bot response after a delay
    setTimeout(() => {
      const botResponse = "This is a simulated bot response.";
      setMessages([...messages, { text: botResponse, isUser: false }]);
    }, 1000);

    scrollToBottom();

    // Clear the input field
    setInput("");
  };
  return (
    <>
      {
        // If there are no messages, show the onboarding message
        // if form is successful, return chat, else return onboarding
        // messages.length === 0 ? (
        //   <ChatOnboarding />
        // ) : (
        //   <div className="relative h-[80vh]">
        //     <div className="chat">
        //       <div>
        //         <div className={`message user`}>
        //           <div className="flex items-center">
        //             <img
        //               src="user-image.jpg" // Replace with the URL of the user's image
        //               alt="User"
        //               className="w-8 h-8 rounded-full mr-2"
        //             />
        //             {input}
        //           </div>
        //         </div>
        //       </div>
        //       {messages.map((message, index) => (
        //         <ChatMessage
        //           key={index}
        //           text={message.text}
        //           isUser={message.isUser}
        //         />
        //       ))}
        //     </div>
        //     {/* form */}
        //     <div className="absolute bottom-0 z-10  ">
        //       <div className="grid place-items-center">
        //         <div className=" ">
        //           <input
        //             type="text"
        //             placeholder="Type your message..."
        //             value={input}
        //             onChange={(e) => setInput(e.target.value)}
        //             onKeyPress={(e) => {
        //               if (e.key === "Enter") {
        //                 handleUserMessage();
        //               }
        //             }}
        //             autoFocus
        //           />
        //           <button onClick={handleUserMessage}>Send</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // )
      }

      <div className="relative h-[80vh]">
        {messages.length > 0 &&
          messages.map((message, index) => (
            <>
              <div>
                <div
                  className="bg-[#F6F6FB] py-4 lg:py-8 px-[50px]
                lg:px-[100px]"
                  key={index}
                >
                  <div className="flex items-center">
                    <img
                      src="user-image.jpg" // Replace with the URL of the user's image
                      alt="User"
                      className="w-8 h-8 rounded-full mr-2"
                      ref={chatLogRef}
                    />
                    {input}
                  </div>
                </div>
              </div>

              {/* bot message */}
              <div
                className=" py-4 lg:py-8 px-[50px]
                lg:px-[100px]"
              >
                {message.text}
              </div>
            </>
          ))}

        {/* add this empty div to scroll into view */}
        <div className=" h-40" ref={chatLogRef}></div>

        {/* form */}
        <div className="fixed bottom-9 z-10 left-0 right-0  ">
          <div className="grid place-items-center">
            <div className=" ">
              <input
                className=" w-[400px] "
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleUserMessage();
                  }
                }}
                autoFocus
              />
              <button onClick={handleUserMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewChat;
