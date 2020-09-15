import { Resolver,Query, Mutation, Arg } from "type-graphql";
import { Usuario } from "../src/models/Usuario"
import { CreateUserInput } from "../src/inputs/CreateUserInput"

@Resolver(of => Usuario)
export class UserResolver{
    @Query(() => [Usuario])
 
    users(){
        return Usuario.find()
    }

    @Mutation(() => Usuario)
    async createUser(@Arg("data") data:CreateUserInput){
            const usuario = Usuario.create(data);
            console.log("soy data: ",data)
            await usuario.save();
    
            return usuario;
    }
}