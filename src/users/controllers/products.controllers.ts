

import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { User } from '../entities/products.entity/products.entity';
import { UserMapper } from '../mappers/products.mapper';
import { CreateUserDto } from '../dtos/create-products.dto/create-products.dto';
import { partialUpdateUserDto } from '../dtos/create-products.dto/update-products.dto';



@Controller('products')
export class productsController {
    private products: products[] = [];
    private currentId = 1;

    @Get()
    findAll() {
        return this.products.map(product => productsMapper.toResponseDto(products));
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const product = this.products.find(u => u.id === Number(id));
        if (!product) return { error: 'product not found' };
        return roductMapper.toResponseDto(product);
    }

    @Post()
    create(@Body() dto: CreateProductDto) {
        const entity: Product = ProductMapper.toEntity(this.currentId++, dto);
        this.products.push(entity);
        return ProductMapper.toResponseDto(entity);

    }

    @Patch(':id')
    partialUpdate(@Param('id') id: string, @Body() dto: partialUpdateUserDto) {
        const product = this.products.find(p => p.id === Number(id));
        if (!product) return { error: 'Product not found' };
        if (dto.name !== undefined) product.name = dto.name;
        if (dto.description!== undefined) product.description = dto.description;
        return ProductMapper.toResponseDto(products);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        const exists = this.products.some(p => p.id === Number(id));
        if (!exists) return { error: 'Product not found' };
        this.products = this.products.filter(p => p.id !== Number(id));
        return { message: 'Deleted successfully' };
    }
}