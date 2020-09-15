import { Resolver,Query,Mutation,Arg } from "type-graphql"
import { CreateRecetaInput } from "../src/inputs/RecetasInput/CreateRecetaInput";
import { Categoria } from "../src/models/Categoria";
import { Receta } from "../src/models/Receta";
import { Usuario } from "../src/models/Usuario"

@Resolver(of=> Receta)
export class RecetaResolver{
    @Query(()=>[Receta])
    recetas(){
        return Receta.find()
    }

    @Mutation(() => Receta)
    async CreateReceta(@Arg("id") id:String,@Arg("ID") ID:String ,@Arg("data") data: CreateRecetaInput){
        const categoria = await Categoria.findOne({ where: {ID }})
        const user = await Usuario.findOne({where:{id}})
        console.log("Categoria.. "+categoria+" - Usuario"+Usuario)
        const receta = Receta.create({...data,usuario:user,Category:categoria})
        await receta.save()

        return receta
    }
}