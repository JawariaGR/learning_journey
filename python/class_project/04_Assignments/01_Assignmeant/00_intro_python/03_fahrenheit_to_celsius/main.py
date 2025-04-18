def main():
    degrees_fahrenheit = float(input("Enter Your Temperature In Fahrenheit:- "))
    degrees_celsius = (degrees_fahrenheit - 32) * 5.0/9.0
    temperature = degrees_celsius
    return f"Temperature:- {degrees_fahrenheit}F = {temperature:.2f}C"

if __name__ == "__main__":
    print(main())