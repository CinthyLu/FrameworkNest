import { IsNotEmpty, MinLength, IsNumber, Min } from 'class-validator';

export class UpdateProductDto {

  @IsNotEmpty()
  @MinLength(3)
  name: string;

  description?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;
}
