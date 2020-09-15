import { BaseEntity,Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Receta extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID: String

    @Column()
    Name: String
}