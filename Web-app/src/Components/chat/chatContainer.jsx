import { useState } from "react";
import ChatOnboarding from "../chat/chatOnboarding";
import NewChat from "../../Components/newChat";

function ChatContainer() {
  const [input, setInput] = useState({
    language: "English",
    course_code: "",
    page_number: 0,
    question: "string",
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
      language,
      course_code,
      page_number,
      question,
      explanation_level,
      explanation_type,
      prior_knowledge,
      interaction_needed,
    } = input;

    if (input.question.trim() === "") return;
    // console.log(input);
    // const userMessage = { text: input.question, isUser: true };

    try {
      fetch("https://innovatex.azurewebsites.net/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      })
        .then((response) => response.text())
        .then((data) => {
          const responseObject = JSON.parse(data);

          console.log(responseObject.message);
          // Add the user's message and the bot's response to the chat history
          setMessages([
            ...messages,
            { text: input.question, isUser: true }, // Add the user message text
            { text: responseObject.message, isUser: false }, // Add the bot's response text
          ]);
          setInput({
            language: "English",
            course_code: "",
            page_number: 0,
            question: "",
            explanation_level: "Advanced insights",
            prior_knowledge: "Little",
            explanation_type: "In-depth explorations",
            interaction_needed: "Yes",
          }); // Clear the input fields
        });
    } catch (error) {
      console.error(error);
    }

    // const botResponse = "This is a simulated bot response."; // Simulated bot response; replace with your actual API call
    // scrollToBottom();
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
