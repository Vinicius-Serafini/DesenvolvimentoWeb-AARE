import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("/products")
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    async create(@Body() customer) {
        return await this.service.create(customer);
    }

    @Delete()
    async delete(@Body() product){
        const { id } = product;

        return this.service.delete(id);
    }

    @Put()
    async update(@Body() product){
        return this.service.update(product);
    }
}