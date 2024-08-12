import { IsNotEmpty, IsOptional, IsString, IsDate, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsMongoId() // Validate that the authorId is a valid MongoDB ObjectId
  readonly authorId: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date) // To handle plain string to Date conversion
  readonly publishedDate: Date;
}
