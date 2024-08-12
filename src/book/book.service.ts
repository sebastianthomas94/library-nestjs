import { Injectable } from '@nestjs/common';
import BookRepository from 'src/repositories/BookRepository';

@Injectable()
export class BookService {
  constructor(private readonly booksRepository: BookRepository) {}
  getBooks() {
    return this.booksRepository.getAllBooks();
  }

  addBook(book) {
    return this.booksRepository.addBook(book);
  }

  deleteBook(id) {
    return this.booksRepository.deleteBook(id);
  }

  getBookById(id) {
    return this.booksRepository.getBookById(id);
  }

  udateBookById(id, book) {
    return this.booksRepository.updateBook(id, book);
  }
}
