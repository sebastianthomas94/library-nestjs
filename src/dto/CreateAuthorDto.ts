// create-author.dto.ts
import { IsString, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAuthorDto {
  @ApiProperty({ description: 'Name of the author' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Biography of the author', required: false })
  @IsOptional()
  @IsString()
  biography?: string;

  @ApiProperty({ description: 'Date of birth of the author', required: false })
  @IsDate()
  @IsDate()
  @Type(() => Date)
  readonly birthdate: Date;
}
