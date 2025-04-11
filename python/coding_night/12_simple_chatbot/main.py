import chainlit as chl

@chl.on_message
async def main(message:chl.Message):
    respone = f"You said: {message.content}"
    await chl.Message(content=respone).send()