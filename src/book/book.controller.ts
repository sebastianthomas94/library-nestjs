import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schema/Book.schema';
import { CreateBookDto } from 'src/dto/CreateBookDto';
import { UpdateBookDto } from 'src/dto/UpdateBookDto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get() // Get all books
  getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Get(':id') // Get one book
  getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post() // Add one book
  @UsePipes(new ValidationPipe({ transform: true })) //validation of date
  async addBook(@Body() book: CreateBookDto): Promise<Book> {
    await this.bookService.checkIfAuthorExist(book.authorId);
    return this.bookService.addBook(book);
  }

  @Put(':id') // Update a book
  @UsePipes(new ValidationPipe({ transform: true }))
  updateBook(
    @Param('id') id: string,
    @Body() updatedBook: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBookById(id, updatedBook);
  }

  @Delete(':id') // Delete one book
  @UsePipes(new ValidationPipe({ transform: true }))
  deleteBook(@Param('id') id: string): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
