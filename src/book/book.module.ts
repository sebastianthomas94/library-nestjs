import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  BookSchema } from 'src/schema/Book.schema';
import BookRepository from 'src/repositories/BookRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'book',
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
