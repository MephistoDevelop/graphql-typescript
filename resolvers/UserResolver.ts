import { Resolver,Query, Mutation, Arg } from "type-graphql";
import { Usuario } from "../src/models/Usuario"
import { CreateUserInput } from "../src/inputs/CreateUserInput"
import { UpdateUserInput } from "../src/inputs/UpdateUserInput"

@Resolver(of => Usuario)
export class UserResolver{
    @Query(() => [Usuario])
 
    users(){
        return Usuario.find()
    }

    @Query(()=>Usuario)
        usuarioID(@Arg("id") id: string){
        return Usuario.findOne({ where:{ id }})
    }

    @Mutation(() => Usuario)
    async createUser(@Arg("data") data:CreateUserInput){
            const usuario = Usuario.create(data);
            console.log("soy data: ",data)
            await usuario.save();
    
            return usuario;
    }

    @Mutation(()=>Usuario)
    async UpdateUsuario(@Arg("id") id:string, @Arg("data") data: UpdateUserInput){
        const usuario = await Usuario.findOne({where: { id }});
        
        if(!usuario) throw new Error("Usuario no encontrado...");
       
        Object.assign(usuario,data);
        
        await usuario.save();

        return usuario;
    }
}