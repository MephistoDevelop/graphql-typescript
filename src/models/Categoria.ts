import { BaseEntity,Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn} from "typeorm";
import { ObjectType,Field,ID} from "type-graphql"
import { Receta } from "./Receta";

@Entity()
@ObjectType()
export class Categoria extends BaseEntity{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    ID: String

    @Field(()=>String)
    @Column()
    Name: String
    
    
    //@OneToOne(type=> Receta, receta=>receta.ID)
    //@JoinColumn()
    //Recipe: Receta
}