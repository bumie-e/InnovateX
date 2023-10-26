# get_quiz.py
import json
from typing import Dict
from decouple import config
import openai
#import secrets_beta

openai.api_type = "azure"
openai.api_base = config("AZURE_OPENAI_ENDPOINT") 
openai.api_version = "2023-05-15"
openai.api_key = config("AZURE_OPENAI_KEY")
model_name = config("model_name")

# I have some chat history saved in a list, where each item is a dictionary representing a message with a role and content.
chat_history = [
    {
        "role": "system",
        "content": "You are a REST API server with an endpoint /generate-random-question/:topic, which generates 5 unique random quiz questions in json data. Generate 5 different unique random quizes for this topic.",
    },
    {"role": "user", "content": "GET /generate-random-question/devops"},
    {
        "role": "assistant",
        "content": '\n\n{\n    "question": "What is the difference between Docker and Kubernetes?",\n    "options": ["Docker is a containerization platform whereas Kubernetes is a container orchestration platform", " Kubernetes is a containerization platform whereas Docker is a container orchestration platform", "Both are containerization platforms", "Neither are containerization platforms"],\n    "answer": "Docker is a containerization platform whereas Kubernetes is a container orchestration platform",\n    "explanation": "Docker helps you create, deploy, and run applications within containers, while Kubernetes helps you manage collections of containers, automating their deployment, scaling, and more."\n}',
    },
    {
        "role": "assistant",
        "content": '\n\n{\n    "question": "Which tool is primarily used for version control?",\n    "options": ["Jenkins", "Docker", "Git", "Nagios"],\n    "answer": "Git",\n    "explanation": "Git is a distributed version control system. Jenkins is a continuous integration and continuous delivery tool, Docker is for containerization, and Nagios is for monitoring."\n}'
    },
    {
        "role": "assistant",
        "content": '\n\n{\n    "question": "What does CI/CD stand for in DevOps?",\n    "options": ["Continuous Integration/Continuous Deployment", "Container Image/Container Deployment", "Continuous Input/Continuous Delivery", "Configuration Integration/Continuous Development"],\n    "answer": "Continuous Integration/Continuous Deployment",\n    "explanation": "CI/CD stands for Continuous Integration and Continuous Deployment. It emphasizes the automated integration of code changes from multiple contributors and the automated deployment to a production environment."\n}'
    },
    {
        "role": "assistant",
        "content": '\n\n{\n    "question": "Which of the following is NOT a benefit of Infrastructure as Code (IaC)?",\n    "options": ["Consistent environment setup", "Automated infrastructure provisioning", "Reduced manual errors", "Dependence on physical hardware"],\n    "answer": "Dependence on physical hardware",\n    "explanation": "Infrastructure as Code (IaC) allows infrastructure to be provisioned and managed using code and software development techniques. It reduces manual errors, provides consistent environment setup, and enables automated provisioning. It does not, however, introduce a dependence on physical hardware."\n}'
    },
    {
        "role": "assistant",
        "content": '\n\n{\n    "question": "What is the primary purpose of a configuration management tool in DevOps?",\n    "options": ["To deploy applications", "To manage database schemas", "To automate infrastructure provisioning", "To maintain consistent configurations across environments"],\n    "answer": "To maintain consistent configurations across environments",\n    "explanation": "Configuration management tools in DevOps are primarily used to maintain consistent configurations across various environments. They ensure that all infrastructure is set up and configured in the desired state."\n}'
    }

    
]

# I define a function that takes a topic string and an API key, and returns a dictionary with a quiz question, options, answer, and explanation.
def get_quiz_from_topic(topic: str) -> Dict[str, str]:
    global chat_history


    # I make a copy of the chat history and add the user's message requesting a quiz question for the given topic.
    current_chat = chat_history[:]
    current_user_message = {
        "role": "user",
        "content": f"GET /generate-random-question/{topic}",
    }
    current_chat.append(current_user_message)
    chat_history.append(current_user_message)

    # I use the OpenAI API to generate a response based on the current chat history.
    response = openai.ChatCompletion.create(
            engine=model_name,
            messages= current_chat, 
            max_tokens=1098,
            temperature=0
        )

    # I extract the quiz question from the response and add it to the chat history as an assistant message.
    quiz = response["choices"][0]["message"]["content"]
    current_assistent_message = {"role": "assistant", "content": quiz}
    chat_history.append(current_assistent_message)

    # I print the quiz question and return it as a dictionary.
    print(f"Response:\n{response}")
    json_string = json.dumps([quiz])
    return json.loads(json_string)

def quiz_response(topic):
    quizes = {}
    for i in range(5):
        quiz = get_quiz_from_topic(topic)
        current_assistent_message = {"role": "assistant", "content": quiz}
        chat_history.append(current_assistent_message)
        quizes.update(quiz)

        # I print the quiz question and return it as a dictionary.
        print(f"Response:\n{quiz}")
    return json.load(quiz)

