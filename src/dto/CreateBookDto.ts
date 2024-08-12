import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @ApiProperty({ description: 'Title of the book' })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({ description: 'Description of the book', required: false })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({ description: 'Author ID of the book' })
  @IsNotEmpty()
  @IsString()
  readonly authorId: string;

  @ApiProperty({ description: 'Published date of the book' })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  readonly publishedDate: Date;
}
