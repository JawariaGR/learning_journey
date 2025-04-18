def main():
    user_f_animal = input("What's your favorite animal?")
    user_f_animal = user_f_animal.lower()
    output = (f"My favorite animal is also {user_f_animal}!")
    return output

if __name__ == "__main__":
    print(main())
    