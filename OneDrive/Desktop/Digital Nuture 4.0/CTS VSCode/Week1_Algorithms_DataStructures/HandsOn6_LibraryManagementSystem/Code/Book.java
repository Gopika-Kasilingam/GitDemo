package Week1_Algorithms_DataStructures.HandsOn6_LibraryManagementSystem.Code;

public class Book implements Comparable<Book> {
    private int bookId;
    private String title;
    private String author;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    public int getBookId() {
        return bookId;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public int compareTo(Book other) {
        return this.title.compareToIgnoreCase(other.title); // For binary search by title
    }

    @Override
    public String toString() {
        return "ID: " + bookId + ", Title: " + title + ", Author: " + author;
    }
}

