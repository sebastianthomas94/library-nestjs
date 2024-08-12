import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';
import AuthorRepository from '../repositories/AuthorRepository';
import { Author } from '../schema/Author.schema';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';

describe('AuthorService', () => {
  let service: AuthorService;
  let authorRepository: AuthorRepository;

  const mockAuthorRepository = {
    getAllAuthors: jest.fn(),
    getAuthorById: jest.fn(),
    addAuthor: jest.fn(),
    updateAuthor: jest.fn(),
    deleteAuthor: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorService,
        { provide: AuthorRepository, useValue: mockAuthorRepository },
      ],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
    authorRepository = module.get<AuthorRepository>(AuthorRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
