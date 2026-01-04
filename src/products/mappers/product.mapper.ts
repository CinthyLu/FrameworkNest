import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductEntity } from '../entities/product.entity';

export class ProductMapper {

static toEntity(dto: CreateProductDto): ProductEntity {
  const entity = new ProductEntity();

  entity.name = dto.name;
  entity.description = dto.description ?? '';
  entity.price = dto.price;
  entity.stock = dto.stock ?? 0;

  return entity;
}


  static toResponse(entity: ProductEntity) {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      price: entity.price,
      stock: entity.stock,
      createdAt: entity.createdAt,
    };
  }
}
