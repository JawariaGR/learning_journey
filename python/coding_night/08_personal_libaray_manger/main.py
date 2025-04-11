import json

class BookCollection:
    
    """A class to mange a collection of book, allowing user to store and organiza their reading materials"""

    def __init__(self):
        """Initialize a new book collection with an empty list and set up file storage"""
        self.book_list = []
        self.storage_file = "book_data.json"
        self.read_from_file()
        
    def read_from_file(self):
        """Load saved books from a JSON file into memory.
        If the file doesn't exist or is corrupted, start with an empty collection"""
        try:
            with open(self.storage_file,"r") as file:
             self.book_list = json.load(file)
        except(FileNotFoundError,json.JSONDecodeError):
            self.book_list = [] 

    def save_to_file(self):
         """Store the current book collection to a JSON file for permanent storage."""
         with open(self.storage_file,"w") as file:
             json.dump(self.book_list,file,indent=4)

    def crete_new_book(self):   
        """Add a new book to the collection by gathering information from the user."""
        book_tltle = input("Enter Book Title")
        book_author = input("Enter Author Name")
        publication_year = input("Enter Publication Year:")
        book_genre = input("Enter Gener:")
        is_book_read = (
            input("Have You Read This Book? (yes/no):").strip().lower =="yes"
        ) 

        new_book = {
            "title":book_tltle,
            "author":book_author,
            "year":publication_year,
            "read":is_book_read,
            "genre":book_genre
        }  


        self.book_list.append(new_book) 
        self.save_to_file()
        print("Book added Successfully!\n")     

    def delete_book(self):
         """Remove a book from the collection using its title."""
         book_title = input("Enter the title of the book to remove: ")
         for book in self.book_list:
             if book["title"].lower() == book_title.lower():
                 self.book_list.remove(book)
                 self.save_to_file()
                 print("Book Removed Successfully!\n")
                 return  
         print("Book not found!\n")  


    def find_book(self):
        """Search for books in the collection by title or author name."""
        search_type = input("Search by:\n1. Title\n2. Author\n Enter your Choice")
        search_text = input("Enter Search Term:").lower()
        Found_book = [
            book
            for book in self.book_list
            if search_text in book["title"].lower()
            or search_text in book["author"].lower()
        ]

        if Found_book:
            print("Match book")
            for index,book in enumerate(Found_book,1):
                reading_status = "Read" if book["read"] else "Unread"
                print(
                    f"{index}.{book['title']} by {book['author']} ({book['year']}) -{book['genre']} - {reading_status}"
                )

        else:
            print("No matching book found. \n")  


    def update_book(self):
        """Modify the details of an aexisting book in the collection."""
        book_title = input("Enter the title of the book you want to edit:")
        for book in self.book_list:
            if book['title'].lower() == book_title.lower():
                print("Leave Blank to keep existing value.")
                book["title"] = input(f"New title ({book['title']}):") or book["title"]
                book["author"] = (
                    input(f"New author ({book['author']}):") or book["author"]
                )
                book["year"] = input(f"New year ({book['year']}): ") or book["year"]
                book["genre"] = input(f"New genre ({book['genre']}): ") or book["genre"]
                book["read"] = (
                    input("Have you read this book? (yes/no): ").strip().lower()
                    == "yes"
                )
                self.save_to_file()
                print("Book update successfully! \n")
                return
            print("Book not found! \n")
 
    def show_all_book(self):
        """Display all books in the collection with their details."""
        if not self.book_list:
            print("Your collection is empty.\n")
            return  
        print("Your Book Collection:")
        for index, book in enumerate(self.book_list, 1):
            reading_status = "Read" if book["read"] else "Unread"
            print(
            f"{index}. {book['title']} by {book['author']} ({book['year']}) - {book['genre']} - {reading_status}"
            )
            print()  

    def reading_progress(self):
        """Claculate and display statistics about your reading progress."""
        total_book = len(self.book_list)
        completed_book = sum(1 for book in self.book_list if book["read"])
        completion_rate = (
            (completed_book / total_book * 100) if total_book > 0 else 0 
        )
        print(f"Total book in collection:{total_book}")
        print(f"Reading Progress:{completion_rate:.2f}%\n")


    def start_application(self):
        """Run the main application loop with a user-friendly menu interface."""
        while True:
            print("Welcome to Your Book Collection Manager!")
            print("1. Add a new book")
            print("2. Remove a book")
            print("3. Search for books")
            print("4. Update book details")
            print("5. View all books")
            print("6. View reading progress")
            print("7. Exit")
            user_choice = input("Plese Choose an Option (1-7):")


            if user_choice == "1":
                self.crete_new_book()
            elif user_choice == "2":
                self.delete_book()
            elif user_choice == "3":
                self.find_book()      
            elif user_choice == "4":
                self.update_book()
            elif user_choice == "5":
                self.show_all_book()    
            elif user_choice == "6":
                self.reading_progress()
            elif user_choice == "7":
                self.save_to_file()
                print("Thank you for using Book Collection Manager. Goodbye!")
                break
            else:  
                print("Invalid choice. Please try again.\n")   

if __name__ == "__main__":
    book_manager = BookCollection()
    book_manager.start_application()                   
