import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/library'),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
