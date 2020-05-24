import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderItem/orderItem.entity";

@Entity ({ name : 'orders' })
export class Order{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'orderNumber', type: 'varchar', length: 100 })
    orderNumber: string;

    @Column({ name: 'orderDate', type: 'date' })
    orderDate: Date;

    @Column({ name: 'total', type: 'decimal', })
    total: number;

    @ManyToOne(type => Customer, customer => customer.orders, { cascade: true, eager: true})
    customer: Customer;

    @OneToMany(type => OrderItem, orderItem => orderItem.order, { cascade: true, eager: true})
    orderItens: OrderItem[];

}