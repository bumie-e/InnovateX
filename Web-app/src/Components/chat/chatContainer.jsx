import { useState } from "react";
import ChatOnboarding from "../chat/chatOnboarding";
import NewChat from "../../Components/newChat";

function ChatContainer() {
  const [input, setInput] = useState({
    topic: "",
    explanation_level: "Advanced insights",
    prior_knowledge: "Little",
    explanation_type: "In-depth explorations",
    interaction_needed: "Yes",
  });
  const [messages, setMessages] = useState([
    // Initial bot message
    {
      text: "Welcome! How can I assist you?",
      isUser: false,
    },
  ]);
  const [step, setStep] = useState(1);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleChat(e) {
    e.preventDefault();
    const {
      topic,
      explanation_level,
      explanation_type,
      prior_knowledge,
      interaction_needed,
    } = input;
    const formData = new FormData();

    formData.append("topic", topic);
    formData.append("explanation_level", explanation_level);
    formData.append("explanation_type", explanation_type);
    formData.append("prior_knowledge", prior_knowledge);
    formData.append("interaction_needed", interaction_needed);

    if (input.topic.trim() === "") return;
    // console.log(input);
    const userMessage = { text: input, isUser: true };

    try {
      fetch("https://innovatex-backends.onrender.com/chat", {
        method: "POST",
        body: formData,
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Add the user's message and the bot's response to the chat history
          setMessages([
            ...messages,
            userMessage,
            { text: data, isUser: false },
          ]);
          setInput(""); // Clear the input field
        });
    } catch (error) {
      console.error(error);
    }

    const botResponse = "This is a simulated bot response."; // Simulated bot response; replace with your actual API call
    scrollToBottom();
  }

  // if (!messages) return <ChatOnboarding handleFormChange={handleFormChange} />;
  function getNextStep() {
    if (step === 1) {
      setStep(2); // Proceed to the next step only if step 1 is valid
    }
  }

  function getPreviousStep() {
    if (step === 2) {
      setStep(1); // Go back to step 1 from step 2
    }
    // console.log(step);
  }

  switch (step) {
    case 1:
      return (
        <ChatOnboarding
          handleFormChange={handleFormChange}
          getNextStep={getNextStep}
          input={input}
        />
      );
    case 2:
      return (
        <>
          <NewChat
            messages={messages}
            input={input}
            handleChat={handleChat}
            handleFormChange={handleFormChange}
            getPreviousStep={getPreviousStep}
          />
        </>
      );
    default:
      return null;
  }
}

export default ChatContainer;
