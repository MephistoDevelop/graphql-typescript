import { Resolver,Query } from "type-graphql";
import { Usuario } from "../src/models/Usuario"

@Resolver()
export class UserResolver{
    @Query(()=>[Usuario])
 
    users(){
        return Usuario.find()
    }
}