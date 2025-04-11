import streamlit as stl
import random
import time


stl.title("📝Quiz Application")

questions = [
    {
        "question":"What is the capital of pakistan?",
        "options":["Lahore", "Karachi", "Islamabad", "Peshawar"],
        "Answer":"Islambad"
    }, 
    {
        "question": "Who is the founder of Pakistan?",
        "options": [
            "Allama Iqbal",
            "Liaquat Ali Khan",
            "Muhammad Ali Jinnah",
            "Benazir Bhutto",
        ],
        "answer": "Muhammad Ali Jinnah",
    },
    {
        "question": "Which is the national language of Pakistan?",
        "options": ["Punjabi", "Urdu", "Sindhi", "Pashto"],
        "answer": "Urdu",
    },
    {
        "question": "What is the currency of Pakistan?",
        "options": ["Rupee", "Dollar", "Taka", "Riyal"],
        "answer": "Rupee",
    },
    {
        "question": "Which city is known as the City of Lights in Pakistan?",
        "options": ["Lahore", "Islamabad", "Faisalabad", "Karachi"],
        "answer": "Karachi",
    },
]

if "current_question" not in stl.session_state:
    stl.session_state.current_question = random.choice(questions)

question = stl.session_state.current_question 

stl.subheader(question["question"])

selected_options = stl.radio("Choose your answer",question["options"],key="answer")

if stl.button("Submit Answer"):
    if selected_options == question["answer"]:
        stl.success('✅ Correct!')
    else:
        stl.error("❌ Incorrect! the correct answer is " + question["answer"])

    time.sleep(2)

    stl.session_state.current_question = random.choice(questions)

    stl.rerun()
