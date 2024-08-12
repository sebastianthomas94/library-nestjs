// create-author.dto.ts
import { IsString, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  biography?: string;

  @IsDate()
  @IsDate()
  @Type(() => Date)
  readonly birthdate: Date;
}

