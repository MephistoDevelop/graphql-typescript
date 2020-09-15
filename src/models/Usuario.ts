import {  BaseEntity,PrimaryGeneratedColumn,Column, Entity } from "typeorm";
import { ObjectType,Field,ID } from "type-graphql";

@Entity()
@ObjectType()
export class Usuario extends BaseEntity{
    
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: String;

    @Field(()=>String)
    @Column()
    name: String

    @Field(()=>String)
    @Column()
    email: String

    @Field(()=>String)
    @Column()
    password: String
}


