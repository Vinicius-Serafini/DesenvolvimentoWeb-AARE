import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "src/product/product.entity";
import { Order } from "src/order/order.entity";

@Entity ({ name : 'orderitem' })
export class OrderItem{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product)
    @JoinColumn({ name: "product_id"})
    products: Product;

    @ManyToOne(type => Order, order => order.orderItens,)
    //@JoinColumn({ name: "order_id"})
    order: Order;

    @Column({ name: 'quantity', type: 'integer' })
    quantity: number;

    @Column({ name: 'unitValue', type: 'decimal' })
    unitValue: number;

}