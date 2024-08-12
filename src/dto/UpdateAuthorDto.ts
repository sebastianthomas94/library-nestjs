
// update-author.dto.ts
import { IsString, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateAuthorDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  biography?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly birthdate: Date;
}