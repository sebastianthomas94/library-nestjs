import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/CreateAuthorDto';
import { UpdateAuthorDto } from '../dto/UpdateAuthorDto';
import AuthorRepository from '../repositories/AuthorRepository';
import { Author } from '../schema/Author.schema';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  // Retrieve all authors
  getAllAuthors(): Promise<Author[]> {
    return this.authorRepository.getAllAuthors();
  }

  // Retrieve a single author by ID
  getAuthorById(id: string): Promise<Author> {
    return this.authorRepository.getAuthorById(id);
  }

  // Add a new author
  addAuthor(author: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.addAuthor(author);
  }

  // Update an existing author
  updateAuthor(id: string, author: UpdateAuthorDto): Promise<Author> {
    return this.authorRepository.updateAuthor(id, author);
  }

  // Delete an author by ID
  deleteAuthor(id: string): Promise<void> {
    return this.authorRepository.deleteAuthor(id);
  }
}
