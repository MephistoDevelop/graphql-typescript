import { Entity,Column,PrimaryGeneratedColumn,BaseEntity,ManyToOne,OneToOne, JoinColumn } from "typeorm"
import { ObjectType,Field,ID } from "type-graphql"
import { Usuario } from "./Usuario"
import { Categoria } from "./Categoria"

@Entity()
@ObjectType()
export class Receta extends BaseEntity{

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    ID: String

    @Field(()=>String)
    @Column()
    Name: String

    @Field(()=>String)
    @Column()
    Description: String

    @Field(()=>String)
    @Column()
    Ingredients: String

    @OneToOne(type=> Categoria, categoria=>categoria.ID)
    @JoinColumn()
    Category: Categoria
 

    @Field(()=>Usuario)
    @ManyToOne(type=> Usuario, usuario=>usuario.recetas)
    @JoinColumn({name:"usuario_id", referencedColumnName: "id"})
    usuario: Usuario
}