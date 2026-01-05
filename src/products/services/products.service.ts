import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { PartialUpdateProductDto } from '../dtos/partial-update-product.dto';
import { ProductResponseDto } from '../dtos/product-response.dto';
import { ConflictException } from '../../exceptions/domain/conflict.exception';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<ProductResponseDto[]> {
    const entities = await this.productRepository.find();
    return entities.map(ProductMapper.toResponse);
  }

  async findOne(id: number): Promise<ProductResponseDto> {
    const entity = await this.productRepository.findOne({ where: { id } });
    if (!entity) {
  throw new NotFoundException(`Producto no encontrado con ID: ${id}`);
}

    return ProductMapper.toResponse(entity);
  }

  async create(dto: CreateProductDto): Promise<ProductResponseDto> {
    
    const exists = await this.productRepository.findOne({ where: { name: dto.name } });
    if (exists) {
      throw new ConflictException(`Ya existe un producto con ese nombre ${dto.name}`);
    }
    const entity = ProductMapper.toEntity(dto);
    const saved = await this.productRepository.save(entity);
    return ProductMapper.toResponse(saved);
  }

  async update(id: number, dto: UpdateProductDto): Promise<ProductResponseDto> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

product.name = dto.name;
if (dto.description !== undefined) {
  product.description = dto.description;
}

    product.price = dto.price;
    product.stock = dto.stock;

    const saved = await this.productRepository.save(product);
    return ProductMapper.toResponse(saved);
  }

  async partialUpdate(id: number, dto: PartialUpdateProductDto): Promise<ProductResponseDto> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    if (dto.name !== undefined) product.name = dto.name;
    if (dto.description !== undefined) product.description = dto.description;
    if (dto.price !== undefined) product.price = dto.price;
    if (dto.stock !== undefined) product.stock = dto.stock;

    const saved = await this.productRepository.save(product);
    return ProductMapper.toResponse(saved);
  }

  async delete(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Producto no encontrado');
    }
  }
}
