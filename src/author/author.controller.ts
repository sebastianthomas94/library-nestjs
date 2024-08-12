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
import { AuthorService } from './author.service'; // Adjust import path as necessary
import { Author } from 'src/schema/Author.schema';
import { CreateAuthorDto } from 'src/dto/CreateAuthorDto';
import { UpdateAuthorDto } from 'src/dto/UpdateAuthorDto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get() // Get all authors
  getAuthors(): Promise<Author[]> {
    return this.authorService.getAllAuthors();
  }

  @Get(':id') // Get one author by ID
  getAuthor(@Param('id') id: string): Promise<Author> {
    return this.authorService.getAuthorById(id);
  }

  @Post() // Add a new author
  @UsePipes(new ValidationPipe({ transform: true }))
  addAuthor(@Body() author: CreateAuthorDto): Promise<Author> {
    return this.authorService.addAuthor(author);
  }

  @Put(':id') // Update an existing author
  @UsePipes(new ValidationPipe({ transform: true }))
  updateAuthor(
    @Param('id') id: string,
    @Body() updatedAuthor: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorService.updateAuthor(id, updatedAuthor);
  }

  @Delete(':id') // Delete an author by ID
  deleteAuthor(@Param('id') id: string): Promise<void> {
    return this.authorService.deleteAuthor(id);
  }
}
