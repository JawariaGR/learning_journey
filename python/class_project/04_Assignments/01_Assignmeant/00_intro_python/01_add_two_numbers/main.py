def main():
    num1 = input("Enter Your First Number: ")
    num1 =int(num1)
    num2 = input("Enter Your Second Number: ")
    num2 = int(num2)
    sum:int = num1 + num2
    message:str = (f"Sum Of Value:- {sum} ")
    return message


if __name__ == '__main__':
       print(main())