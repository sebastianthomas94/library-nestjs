import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from '../dto/CreateBookDto';
import { UpdateBookDto } from '../dto/UpdateBookDto';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({ status: 200, description: 'List of books' })
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiResponse({ status: 200, description: 'Book details' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  getBook(@Param('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add a new book' })
  @ApiResponse({ status: 201, description: 'Book created' })
  addBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.addBook(createBookDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiResponse({ status: 200, description: 'Book updated' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBookById(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiResponse({ status: 204, description: 'Book deleted' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
