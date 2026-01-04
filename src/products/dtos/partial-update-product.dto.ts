import { IsOptional, MinLength, IsNumber, Min } from 'class-validator';

export class PartialUpdateProductDto {

  @IsOptional()
  @MinLength(3)
  name?: string;

@IsOptional()
description?: string;


  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;
}
