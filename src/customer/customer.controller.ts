  
import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { CustomerService } from "./customer.service";

@Controller("/customers")
export class CustomerController {

    constructor(private readonly service: CustomerService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(":id")
    async findById(@Param('id') id: number) { 
        return this.service.findById(id);
    }

    @Post()
    async create(@Body() customer) {
        const { id } = customer;
        
        if(!id){
            return await this.service.create(customer);
        }else{
        return {"Message": "error"}
        } 
    }

    @Delete()
    async delete(@Body() customer){
        const { id } = customer;
        
        return this.service.delete(id);
    }

    @Put()
    async update(@Body() customer){
            return this.service.update(customer)
    }
}