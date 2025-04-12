import os 
import chainlit as chl
import google.generativeai as genai
from dotenv import load_dotenv
from typing import Optional,Dict

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=gemini_api_key)

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash" 
)

@chl.oauth_callback
def oauth_callback(
    provider_id:str,
    token:str,
    raw_user_data:Dict[str,str],
    default_user:chl.User
)-> Optional[chl.User]: 
    """Handel the OAuth callback from Github
    Return the user object if autheniation is successful,None otherwise"""

    print(f"providers:{provider_id}")
    print(f"User data:{raw_user_data}")
    return default_user


@chl.on_chat_start
async def handle_chat_start():
    chl.user_session.set("history",[])

    await chl.Message(content="Hello! How can I help you today?").send()


@chl.on_message
async  def handle_message(message:chl.Message):
    history = chl.user_session.get("history")
    history.append({"role": "user", "parts": [{"text": message.content}]})

    try:
        response = model.generate_content(history)
        response_text = response.text if hasattr(response, "text") else "No response."
        history.append({"role": "model", "parts": [{"text": response_text}]})
        chl.user_session.set("history", history)
        await chl.Message(content=response_text).send()
    except Exception as e:
        print(f"Error generating response: {e}")
        await chl.Message(content="Sorry, an error occurred.").send()

