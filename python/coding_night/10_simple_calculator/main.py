import streamlit as stl

def main():
    stl.title("Simple Calculator")
    stl.write("Enter Two Numbers and Choose an Operation")

    col1,col2 = stl.columns(2)

    with col1:
        num1 = stl.number_input("Enter First NUmber", value=0.0)

    with col2:
        num2 = stl.number_input("Enter Second Number",value=0.0) 


    operation = stl.selectbox("Choose Opration",["Addition","Subtraction","Multiplication","Division"])   


    if stl.button("Calculate"):
        try:
            if operation == "Addition":
                result = num1 + num2
                symbol = "+"
            elif operation =="Subtraction":
                result = num1 - num2
                symbol = "-"
            elif operation == "Multiplication":
                result = num1 * num2
                symbol = "✖"
            else:
                if num2 == 0:
                    stl.error("Error: Divison by zero")
                    return
                result = num1 / num2
                symbol = "➗"


            stl.success(f"{num1} {symbol} {num2} = {result}")   

        except Exception as e:
            stl.error(f"An error occurred:{str(e)}")

if __name__ == "__main__":
    main()              