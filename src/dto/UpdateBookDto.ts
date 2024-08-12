import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBookDto } from './CreateBookDto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({ description: 'Title of the book', required: false })
  @IsOptional()
  @IsString()
  readonly title?: string;

  @ApiProperty({ description: 'Description of the book', required: false })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({ description: 'Author ID of the book', required: false })
  @IsOptional()
  @IsString()
  readonly authorId?: string;

  @ApiProperty({ description: 'Published date of the book', required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly publishedDate?: Date;
}
