import random
import streamlit as stl
import time
import requests


stl.title("Money Making Machine")


def generate_money():
    return random.randint(1,1000)

stl.subheader("Instant Cash Generator")
if stl.button("Generate Money"):
    stl.write("Conting Your Money")
    time.sleep(1)
    amount = generate_money()
    stl.success(f"You Made $ {amount}!")


def fetch_side_hustle():
    try:
        respone = requests.get('http://127.0.0.1:8000/side_hustles')
        if respone.status_code == 200:
            hustles = respone.json()
            return hustles['side_hustles'] 
        else:
            return("Freelancing")

    except:
        return("Somthing Went Wrong")  

stl.subheader("Side Hustle Ideas")
if stl.button("Generate a Hustle"):
    idea = fetch_side_hustle()
    stl.success(idea)
    
def fetch_money_quotes():
    try:
        respone = requests.get('http://127.0.0.1:8000/money_quotes')
        if respone.status_code == 200:
            moneyqoutes = respone.json()
            return moneyqoutes['money_quotes']
        else:
            return("Do not save what is left after spending, but spend what is left after saving. – Warren Buffett")
    except:
        return("Somthing Went Wrong")
    
stl.subheader("Money Quotes")
if stl.button("Get Quote"):
    quote = fetch_money_quotes()
    stl.success(quote)