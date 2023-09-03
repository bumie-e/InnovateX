import streamlit as st
from streamlit_extras.switch_page_button import switch_page

st.text("Please answer the follwoing questions")

q1 = st.text_input('What specific topics or concepts are you interested in learning about?', '')

q2 = st.radio(
    "Are you looking for introductory explanations or more advanced insights?",
    ["Introductory explanations", "Advanced insights"],
    )

q3 = st.radio(
    "Would you like explanations to start from the basics or assume some prior understanding?",
    ["Little", "Prior"],
    )

q4 = st.radio(
    "Do you prefer concise explanations or in-depth explorations?",
    ["Concise explanations", "In-depth explorations"],
    )
q5 = st.radio(
    "Do you want interactive elements like quizzes, exercises, or simulations?",
    ["Yes", "No"],
    )
q6 = st.text_input("Are there any specific examples or real-world applications you'd like to see?", '')

if q4 == "Concise explanations":
    q4 = "using simple language, avoiding technical jargon"
if q5 == "Yes":
    q5 = "I prefer an interactive learning experience with opportunities for feedback"
else:
    q5=''
if q2 == 'Advanced insights?':
    q2 = "I'm looking to expand my knowledge in"
else:
    q2 = 'I need an introducton to'
if q6 !='':
    q6 = f"provide practical examples or case studies related to {q6}"



if q1 != '':
    prompt = f"""{q2} {q1}, and I have {q3} knowledge in this area. {q5}. Please explain {q1} using {q4}. Additionally, can you {q6} to make it more engaging and relevant to my interests?"""

    # st.write(prompt)
    # Initialization
    if 'prompt' not in st.session_state:
        st.session_state['prompt'] = prompt
    else:
        st.session_state['prompt'] = prompt
    if 'topic' not in st.session_state:
        st.session_state['topic'] = q1
    else:
        st.session_state['topic'] = q1
    cont = st.button('Continue')
    if cont:
        switch_page("chat")





# # Store the initial value of widgets in session state
# if "visibility" not in st.session_state:
#     st.session_state.visibility = "visible"
#     st.session_state.disabled = False

# col1, col2 = st.columns(2)

# with col1:
#     st.checkbox("Disable text input widget", key="disabled")
#     st.radio(
#         "Set text input label visibility 👉",
#         key="visibility",
#         options=["visible", "hidden", "collapsed"],
#     )
#     st.text_input(
#         "Placeholder for the other text input widget",
#         "This is a placeholder",
#         key="placeholder",
#     )

# with col2:
#     text_input = st.text_input(
#         "Enter some text 👇",
#         label_visibility=st.session_state.visibility,
#         disabled=st.session_state.disabled,
#         placeholder=st.session_state.placeholder,
#     )

#     if text_input:
#         st.write("You entered: ", text_input)