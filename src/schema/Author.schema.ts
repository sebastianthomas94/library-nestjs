import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Author extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  biography?: string;

  @Prop({ required: true })
  birthdate: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
