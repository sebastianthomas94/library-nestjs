import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service'; // Adjust import path if necessary
import { CreateBookDto } from '../dto/CreateBookDto'; // Adjust import path if necessary
import { UpdateBookDto } from '../dto/UpdateBookDto'; // Adjust import path if necessary
import { Book } from 'src/schema/Book.schema'; // Adjust import path if necessary

describe('BookController', () => {
  let controller: BookController;
  let service: BookService;

  const mockBookService = {
    getBooks: jest.fn().mockResolvedValue([{ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") }]),
    getBookById: jest.fn().mockResolvedValue({ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") }),
    addBook: jest.fn().mockResolvedValue({ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") }),
    updateBookById: jest.fn().mockResolvedValue({ id: '1', title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") }),
    deleteBook: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        { provide: BookService, useValue: mockBookService },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBooks', () => {
    it('should return an array of books', async () => {
      const result = await controller.getBooks();
      expect(result).toEqual([{ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") }]);
      expect(service.getBooks).toHaveBeenCalled();
    });
  });

  describe('getBook', () => {
    it('should return a single book', async () => {
      const result = await controller.getBook('1');
      expect(result).toEqual({ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(service.getBookById).toHaveBeenCalledWith('1');
    });
  });

  describe('addBook', () => {
    it('should add a new book', async () => {
      const createBookDto: CreateBookDto = { title: 'New Book', authorId: '1', publishedDate: new Date("2027-04-04") };
      const result = await controller.addBook(createBookDto);
      expect(result).toEqual({ id: '1', title: 'Test Book', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(service.addBook).toHaveBeenCalledWith(createBookDto);
    });
  });

  describe('updateBook', () => {
    it('should update an existing book', async () => {
      const updateBookDto: UpdateBookDto = { title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") };
      const result = await controller.updateBook('1', updateBookDto);
      expect(result).toEqual({ id: '1', title: 'Updated Book', authorId: '1', publishedDate: new Date("2027-04-04") });
      expect(service.updateBookById).toHaveBeenCalledWith('1', updateBookDto);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book', async () => {
      await controller.deleteBook('1');
      expect(service.deleteBook).toHaveBeenCalledWith('1');
    });
  });
});
