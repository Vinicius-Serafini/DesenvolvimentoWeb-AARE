import { Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private repository: Repository<Order>) { }

    async create(order: Order) {
        return this.repository.save(order);
    }

    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }

    async update(order: Order){
        return this.repository.update(order.id, order);
    }
}