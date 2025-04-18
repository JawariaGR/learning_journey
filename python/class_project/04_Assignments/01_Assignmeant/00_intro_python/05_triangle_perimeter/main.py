def main():
    triangle_side1 = int(input("What is the length of side 1? "))
    triangle_side2 = int(input("What is the length of side 2? "))
    triangle_side3 = int(input("What is the length of side 3? "))
    result = triangle_side1 + triangle_side2 + triangle_side3
    return (
         print(f"The perimeter of the triangle is {result}")
    )

if __name__ == '__main__':
    main()