import {  BaseEntity,PrimaryGeneratedColumn,Column, Entity,OneToMany } from "typeorm";
import { ObjectType,Field,ID } from "type-graphql";
import { Receta } from "./Receta";

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

    @OneToMany(type => Receta, receta=>receta.usuario)
    recetas: Receta[]
}


