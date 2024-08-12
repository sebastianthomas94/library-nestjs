import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { Author } from 'src/schema/Author.schema';
  
  @Injectable()
  export default class AuthorRepository {
    constructor(@InjectModel('author') private authorModel: Model<Author>) {}
  
    // Retrieve all authors
    async getAllAuthors(): Promise<Author[]> {
      try {
        return await this.authorModel.find().exec();
      } catch (error) {
        console.error('Error retrieving authors:', error);
        throw new InternalServerErrorException('Error retrieving authors');
      }
    }
  
    // Retrieve a single author by ID
    async getAuthorById(id: string): Promise<Author> {
      try {
        const author = await this.authorModel.findById(id).exec();
        if (!author) {
          throw new NotFoundException(`Author with ID ${id} not found`);
        }
        return author;
      } catch (error) {
        console.error('Error retrieving author:', error);
        throw new InternalServerErrorException('Error retrieving author');
      }
    }
  
    // Add a new author
    async addAuthor(author: any): Promise<Author> {
      try {
        const newAuthor = new this.authorModel(author);
        return await newAuthor.save();
      } catch (error) {
        console.error('Error adding author:', error.message);
        throw new InternalServerErrorException('Error adding author');
      }
    }
  
    // Update an existing author
    async updateAuthor(id: string, newAuthorData: any): Promise<Author> {
      try {
        const updatedAuthor = await this.authorModel
          .findByIdAndUpdate(id, newAuthorData, {
            new: true,
            runValidators: true,
          })
          .exec();
  
        if (!updatedAuthor) {
          throw new NotFoundException(`Author with ID ${id} not found`);
        }
        return updatedAuthor;
      } catch (error) {
        console.error('Error updating author:', error);
        throw new InternalServerErrorException('Error updating author');
      }
    }
  
    // Delete an author
    async deleteAuthor(id: string): Promise<void> {
      try {
        const result = await this.authorModel.findByIdAndDelete(id).exec();
        if (!result) {
          throw new NotFoundException(`Author with ID ${id} not found`);
        }
      } catch (error) {
        console.error('Error deleting author:', error.message);
        throw new InternalServerErrorException('Error deleting author');
      }
    }
  }
  