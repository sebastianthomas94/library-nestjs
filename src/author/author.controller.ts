import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service'; // Adjust import path as necessary

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get() // Get all authors
  getAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Get(':id') // Get one author by ID
  getAuthor(@Param('id') id: string) {
    return this.authorService.getAuthorById(id);
  }

  @Post() // Add a new author
  addAuthor(@Body() author: any) {
    return this.authorService.addAuthor(author);
  }

  @Put(':id') // Update an existing author
  updateAuthor(@Param('id') id: string, @Body() updatedAuthor: any) {
    return this.authorService.updateAuthor(id, updatedAuthor);
  }

  @Delete(':id') // Delete an author by ID
  deleteAuthor(@Param('id') id: string) {
    return this.authorService.deleteAuthor(id);
  }
}
