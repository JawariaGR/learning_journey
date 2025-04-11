import streamlit as stl
import requests


def get_random_joke():
    """Fetch a random joke from the API."""
    try:
        respone = requests.get("https://official-joke-api.appspot.com/random_joke")

        if respone.status_code == 200:
            joke_data = respone.json()
            return f"{joke_data['setup']} \n\n {joke_data['punchline']}"
        else:
            return "Failed to fetch a joke .Please try again later."
    except:
        return "Why don't React developers like nature? \n They prefer the virtual DOM."  

def main(): 
    stl.title("Random Joke Generator")
    stl.write("Click  the button below to generator a random Joke")

    if stl.button("Generator joke"):
        joke = get_random_joke()
        stl.success(joke)


if __name__ == "__main__":
    main()                    