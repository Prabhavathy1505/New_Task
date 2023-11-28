import { Component } from '@angular/core';

@Component({
  selector: 'app-con-component',
  templateUrl: './con-component.component.html',
  styleUrls: ['./con-component.component.css']
})
export class ConComponentComponent {
  bookCategories = ['Fiction', 'Non-fiction', 'Science Fiction', 'Mystery'];
  books = [
    { title: 'The Great Gatsby', category: 'Fiction' },
    { title: 'Sapiens', category: 'Non-fiction' },
    { title: 'Dune', category: 'Science Fiction' },
    { title: 'The Da Vinci Code', category: 'Mystery' },
    // ... other books
  ];
  filteredBooks = this.books;

  onFilterChange(selectedCategory: string): void {
    if (selectedCategory === 'All') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(
        (book) => book.category === selectedCategory
      );
    }

}
}