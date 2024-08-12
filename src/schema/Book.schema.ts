import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  publishedDate: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
