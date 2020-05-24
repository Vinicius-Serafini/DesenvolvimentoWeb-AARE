import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity ({ name : 'products' })
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar', length: 100 })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'price', type: 'decimal' })
    price: number;

    @Column({ name: 'stockQuantity', type: 'integer'})
    stockQuantity: number;

}