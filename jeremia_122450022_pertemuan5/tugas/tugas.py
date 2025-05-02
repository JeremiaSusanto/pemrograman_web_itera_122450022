from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, title, author, publication_year):
        self._title = title
        self._author = author
        self._publication_year = publication_year

    @abstractmethod
    def get_description(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass

    @property
    def title(self):
        """Property untuk mendapatkan judul"""
        return self._title
    
    def __str__(self):
        return f"{self._title} by {self._author}, published in {self._publication_year}"
    
class Book(LibraryItem):
    def __init__(self, title, author, publication_year, isbn):
        super().__init__(title, author, publication_year)
        self._isbn = isbn

    def get_description(self):
        return f"Book: {super().__str__()}, ISBN: {self._isbn}"
    

class Magazine(LibraryItem):
    def __init__(self, title, author, publication_year, issue_number):
        super().__init__(title, author, publication_year)
        self._issue_number = issue_number

    def get_description(self):
        return f"Magazine: {super().__str__()}, Issue Number: {self._issue_number}"
    
class Library:
    def __init__(self):
        self._items = []

    def add_item(self, item):
        self._items.append(item)

    def display_items(self):
        for item in self._items:
            print(item.get_description())

    def search_by_title(self, keyword):
        """Mencari item berdasarkan judul"""
        results = [item for item in self._items if keyword.lower() in item.title.lower()]
        if results:
            for item in results:
                print(item.get_description())
        else:
            print("Tidak ada item yang ditemukan dengan judul tersebut.")

if __name__ == "__main__":
    library = Library()

    book1 = Book("Python Programming", "John Doe", 2020, "1234567890")
    book2 = Book("Data Science Handbook", "Jane Smith", 2019, "0987654321")
    magazine1 = Magazine("Tech Monthly", "Alice Johnson", 2021, "Issue 5")
    magazine2 = Magazine("Science Weekly", "Bob Brown", 2022, "Issue 10")

    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)

    print("Daftar Item di Perpustakaan:")
    library.display_items()

    print("\nPencarian Item berdasarkan Judul:")
    library.search_by_title("Python")        