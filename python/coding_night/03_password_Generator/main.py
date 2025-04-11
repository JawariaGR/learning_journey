import streamlit as stl
import random
import string


def password_generate(Lenght,use_digits,use_special):
    characters = string.ascii_letters

    if use_digits:
        characters+= string.digits
    
    if use_special :
        characters += string.punctuation

    return ''.join(random.choice(characters)  for _ in range(Lenght)) 

stl.title("Pasword Generator")
lenght = stl.slider("Select Password Lenght",min_value=6,max_value=32, value=12)
use_digits = stl.checkbox("Inculde Digits")
use_special = stl.checkbox("Inculde Special Characters")

if stl.button("Generate Password"):
    password = password_generate(lenght,use_digits,use_special)
    stl.write(f"Generate Password:`{password}`")

