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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { Author } from '../schema/Author.schema';
import { CreateAuthorDto } from '../dto/CreateAuthorDto';
import { UpdateAuthorDto } from '../dto/UpdateAuthorDto';

@ApiTags('authors')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get() // Get all authors
  @ApiOperation({ summary: 'Retrieve all authors' })
  @ApiResponse({
    status: 200,
    description: 'List of authors retrieved successfully',
    type: [Author],
  })
  getAuthors(): Promise<Author[]> {
    return this.authorService.getAllAuthors();
  }

  @Get(':id') // Get one author by ID
  @ApiOperation({ summary: 'Retrieve an author by ID' })
  @ApiResponse({
    status: 200,
    description: 'Author retrieved successfully',
    type: Author,
  })
  @ApiResponse({
    status: 404,
    description: 'Author not found',
  })
  getAuthor(@Param('id') id: string): Promise<Author> {
    return this.authorService.getAuthorById(id);
  }

  @Post() // Add a new author
  @ApiOperation({ summary: 'Add a new author' })
  @ApiResponse({
    status: 201,
    description: 'Author successfully added',
    type: Author,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  addAuthor(@Body() author: CreateAuthorDto): Promise<Author> {
    return this.authorService.addAuthor(author);
  }

  @Put(':id') // Update an existing author
  @ApiOperation({ summary: 'Update an existing author by ID' })
  @ApiResponse({
    status: 200,
    description: 'Author successfully updated',
    type: Author,
  })
  @ApiResponse({
    status: 404,
    description: 'Author not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  updateAuthor(
    @Param('id') id: string,
    @Body() updatedAuthor: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorService.updateAuthor(id, updatedAuthor);
  }

  @Delete(':id') // Delete an author by ID
  @ApiOperation({ summary: 'Delete an author by ID' })
  @ApiResponse({
    status: 204,
    description: 'Author successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Author not found',
  })
  deleteAuthor(@Param('id') id: string): Promise<void> {
    return this.authorService.deleteAuthor(id);
  }
}
