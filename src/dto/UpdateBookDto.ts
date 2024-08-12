import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly authorId?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date) // To handle plain string to Date conversion
  readonly publishedDate?: Date;
}
