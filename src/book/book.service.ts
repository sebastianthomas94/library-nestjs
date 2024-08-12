import { Injectable } from '@nestjs/common';
import { Book } from 'src/schema/Book.schema';
import BookRepository from 'src/repositories/BookRepository';
import { CreateBookDto } from 'src/dto/CreateBookDto';
import { UpdateBookDto } from 'src/dto/UpdateBookDto';
import AuthorRepository from 'src/repositories/AuthorRepository';

@Injectable()
export class BookService {
  constructor(
    private readonly booksRepository: BookRepository,
    private readonly authorRepository: AuthorRepository,
  ) {}

  getBooks(): Promise<Book[]> {
    return this.booksRepository.getAllBooks();
  }

  addBook(book: CreateBookDto): Promise<Book> {
    return this.booksRepository.addBook(book);
  }

  deleteBook(id: string): Promise<void> {
    return this.booksRepository.deleteBook(id);
  }

  getBookById(id: string): Promise<Book> {
    return this.booksRepository.getBookById(id);
  }

  updateBookById(id: string, book: UpdateBookDto): Promise<Book> {
    return this.booksRepository.updateBook(id, book);
  }

  async checkIfAuthorExist(authorId: string): Promise<void> {
    //to check that the author id is valid and already in db.
    const author = await this.authorRepository.getAuthorById(authorId);
    console.log(author)
    return;
  }
}
