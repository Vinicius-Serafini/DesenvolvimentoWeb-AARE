import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "src/order/order.entity";

@Entity ({ name : 'customers' })
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'cpf', type: 'varchar', length: 14 })
    cpf: string;

    @Column({ name: 'adress', type: 'varchar', length: 100 })
    adress: string;

    @OneToMany(type => Order, order => order.customer)
    orders: Order[];

}