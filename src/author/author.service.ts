import { Injectable } from '@nestjs/common';
import AuthorRepository from 'src/repositories/AuthorRepository'; // Adjust import path as necessary

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  // Retrieve all authors
  getAllAuthors() {
    return this.authorRepository.getAllAuthors();
  }

  // Retrieve a single author by ID
  getAuthorById(id: string) {
    return this.authorRepository.getAuthorById(id);
  }

  // Add a new author
  addAuthor(author: any) {
    return this.authorRepository.addAuthor(author);
  }

  // Update an existing author
  updateAuthor(id: string, author: any) {
    return this.authorRepository.updateAuthor(id, author);
  }

  // Delete an author by ID
  deleteAuthor(id: string) {
    return this.authorRepository.deleteAuthor(id);
  }
}
