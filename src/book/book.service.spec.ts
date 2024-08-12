import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import BookRepository from '../repositories/BookRepository';
import AuthorRepository from '../repositories/AuthorRepository';

describe('BookService', () => {
  let service: BookService;
  let bookRepository: BookRepository;
  let authorRepository: AuthorRepository;

  const mockBookRepository = {
    getAllBooks: jest.fn().mockResolvedValue([
      { id: '1', title: 'Book 1', authorId: '1', publishedDate: new Date("2027-04-04") },
    ]),
    getBookById: jest.fn().mockResolvedValue({ id: '1', title: 'Book 1', authorId: '1', publishedDate: new Date("2027-04-04") }),
    addBook: jest.fn().mockResolvedValue({ id: '1', title: 'New Book', authorId: '1', publishedDate: new Date("2027-04-04") }),
    updateBook: jest.fn().mockResolvedValue({ id: '1', title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") }),
    deleteBook: jest.fn().mockResolvedValue(undefined),
  };

  const mockAuthorRepository = {}; // Mock implementation if necessary

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        { provide: BookRepository, useValue: mockBookRepository },
        { provide: AuthorRepository, useValue: mockAuthorRepository },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    bookRepository = module.get<BookRepository>(BookRepository);
    authorRepository = module.get<AuthorRepository>(AuthorRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllBooks', () => {
    it('should return an array of books', async () => {
      const result = await service.getBooks();
      expect(result).toEqual([
        { id: '1', title: 'Book 1', authorId: '1', publishedDate: new Date("2027-04-04") },
      ]);
      expect(bookRepository.getAllBooks).toHaveBeenCalled();
    });


  });

  describe('getBookById', () => {
    it('should return a single book by ID', async () => {
      const result = await service.getBookById('1');
      expect(result).toEqual({ id: '1', title: 'Book 1', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(bookRepository.getBookById).toHaveBeenCalledWith('1');
    });

  });

  describe('addBook', () => {
    it('should add a new book', async () => {
      const newBook = { title: 'New Book', authorId: '1', publishedDate: new Date("2027-04-04") };
      const result = await service.addBook(newBook);
      expect(result).toEqual({ id: '1', title: 'New Book', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(bookRepository.addBook).toHaveBeenCalledWith(newBook);
    });

  });

  describe('updateBookById', () => {
    it('should update an existing book', async () => {
      const updatedBook = { title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") };
      const result = await service.updateBookById('1', updatedBook);
      expect(result).toEqual({ id: '1', title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(bookRepository.updateBook).toHaveBeenCalledWith('1', updatedBook);
    });

  });

  describe('deleteBook', () => {
    it('should delete a book by ID', async () => {
      await service.deleteBook('1');
      expect(bookRepository.deleteBook).toHaveBeenCalledWith('1');
    });

  });
});
