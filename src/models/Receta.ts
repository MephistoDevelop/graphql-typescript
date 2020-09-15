import { Entity,Column,PrimaryGeneratedColumn,BaseEntity } from "typeorm"

@Entity()
export class Receta extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID: String

    @Column()
    Name: String

    @Column()
    Description: String

    @Column()
    Ingredients: String

    @Column()
    Category: String
}