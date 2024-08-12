import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  BookSchema } from 'src/schema/Book.schema';
import BookRepository from 'src/repositories/BookRepository';
import AuthorRepository from 'src/repositories/AuthorRepository';
import { AuthorSchema } from 'src/schema/Author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'book',
        schema: BookSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'author',
        schema: AuthorSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService, BookRepository, AuthorRepository],
})
export class BookModule {}
