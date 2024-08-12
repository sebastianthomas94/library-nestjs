import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';
import { Model } from 'mongoose';
import { Book } from 'src/schema/Book.schema';

@Injectable()
export default class BookRepository {
  constructor(@InjectModel('book') private bookModel: Model<Book>) {}

  async getAllBooks(): Promise<Book[]> {
    try {
      return await this.bookModel.find().exec();
    } catch (error) {
      console.error('Error retrieving books:', error);
      throw new InternalServerErrorException('Error retrieving books');
    }
  }

  // Retrieve a single book by ID
  async getBookById(id: string): Promise<Book> {
    try {
      const book = await this.bookModel.findById(id).exec();
      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return book;
    } catch (error) {
      console.error('Error retrieving book:', error.message);
      if (error.status == 404) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Error retrieving book');
    }
  }

  // Add a new book
  async addBook(book: any): Promise<Book> {
    try {
      const newBook = new this.bookModel(book);
      return await newBook.save();
    } catch (error) {
      console.error('Error adding book:', error.message);
      throw new InternalServerErrorException('Error adding book');
    }
  }

  // Update an existing book
  async updateBook(id: string, newBookData: any): Promise<Book> {
    try {
      const updatedBook = await this.bookModel
        .findByIdAndUpdate(id, newBookData, {
          new: true,
          runValidators: true,
        })
        .exec();

      if (!updatedBook) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return updatedBook;
    } catch (error) {
      console.error('Error updating book:', error);
      if (error.status == 404) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Error updating book');
    }
  }

  // Delete a book
  async deleteBook(id: string): Promise<void> {
    try {
      const result = await this.bookModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
    } catch (error) {
      console.error('Error deleting book:', error.message);
      if (error.status == 404) {
        throw new NotFoundException(`Book with ID ${id} not found or does not exist`);
      }
      throw new InternalServerErrorException('Error deleting book');
    }
  }
}
