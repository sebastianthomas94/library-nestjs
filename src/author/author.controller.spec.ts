import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { Author } from '../schema/Author.schema';
import { CreateAuthorDto } from '../dto/CreateAuthorDto';
import { UpdateAuthorDto } from '../dto/UpdateAuthorDto';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';

describe('AuthorController', () => {
  let controller: AuthorController;
  let authorService: AuthorService;

  const mockAuthorService = {
    getAllAuthors: jest.fn(),
    getAuthorById: jest.fn(),
    addAuthor: jest.fn(),
    updateAuthor: jest.fn(),
    deleteAuthor: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [
        { provide: AuthorService, useValue: mockAuthorService },
      ],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
    authorService = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
