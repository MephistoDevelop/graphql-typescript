import {Resolver,Mutation,Query,Arg} from "type-graphql"
import { Categoria } from "../src/models/Categoria";
import { CreateCategoriaInput } from "../src/inputs/CategoriaInput/CreateCategoriaInput"


@Resolver(of=>Categoria)
export class CategoriaResolver {
    @Query(()=>[Categoria])
    categorias(){
        return Categoria.find()
    }

    @Mutation(()=>Categoria)
    async createCategoria(@Arg("data") data:CreateCategoriaInput){
        const categoria = await Categoria.create(data);

        categoria.save();
        
        return categoria;
    }
}