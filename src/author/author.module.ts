import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from 'src/schema/Author.schema';
import AuthorRepository from 'src/repositories/AuthorRepository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'author',
        schema: AuthorSchema,
      },
    ]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorRepository],
})
export class AuthorModule {}
