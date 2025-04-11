import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel(model_name="gemini-2.0-flash")

while True:

  user_input =input("\nHey Buddy! How can i Help You ?:-(OR exit) ") 

  if user_input.lower() == "exit":
    print("Thanks for Chatting~Goodbey!")
    break

response = model.generate_content(user_input)

print(response.text)