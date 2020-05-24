import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CustomerService } from "../customer/customer.service"

@Controller("/Orders")
export class OrderController {

    constructor(private readonly service: OrderService) { }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    async create(@Body() order) {
        return await this.service.create(order);
    }

    @Delete()
    async delete(@Body() order){
        const { id } = order;
        
        return this.service.delete(id);
    }

    @Put()
    async update(@Body() order){
            return this.service.update(order);
    }
}