import streamlit as stl

def unit_conversion(value, unit_from,unit_to):
    conversions = {
        "meters_kilometers":0.001, # 1 meter = 0.001 kilometer
        "kilometers_meters":1000,  # 1 kilometer = 1000 meter
        "grams_kilograms":0.001,   # 1 gram = 0.001 kilogram
        "kilograms_grams":1000   # 1 kilogram = 1000 gram
    }

    key = f"{unit_from}_{unit_to}" 

    if key in conversions: 
        conversion = conversions[key]
        return value * conversion
    else:
        return "Conversion not supported"
    

stl.title("Unit Converter")
value = stl.number_input("Enter the value:",min_value=1.0,step=1.0)
unit_from = stl.selectbox("Convert From:",["meters","kilometers","grams","kilograms"])
unit_to = stl.selectbox("Convert to:",["meters","kilometers","grams","kilograms"])
if stl.button("Convert"):
    result = unit_conversion(value,unit_from, unit_to)
    stl.write(f"Converted value: {result}") 
