import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get() //get all books
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id') //get one book
  getBook(@Param('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @Post() //Add one book
  addBook(@Body() book: any) {
    return this.bookService.addBook(book);
  }

  @Put(':id') //update a book
  updateBook(@Param('id') id: string, @Body() updatedBook: {}) {
    return this.bookService.udateBookById(id, updatedBook);
  }

  @Delete(':id') //Delete one book
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
