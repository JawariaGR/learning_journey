def main():
    number = float(input("Type a number to see its square:"))
    square_value = number * number
    return (
        print(f"{number} squared is {square_value:.2f}")
    )
if __name__ == '__main__':
    main()