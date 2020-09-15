import { BaseEntity,Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Categoria extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID: String

    @Column()
    Name: String
}