def main():
    anton = 21
    beth = 6 + anton
    chen = 20 + beth
    ethan = chen
    drew = chen + anton
    return (
        f"Anton is {anton} Year old\n"
        f"Beth is {beth} Year old\n"
        f"Chen is {chen} Year old\n"
        f"Ethan is {ethan} Year old\n"
        f"Drew is {drew} Year old"
    )

if __name__ == '__main__':
    print(main())