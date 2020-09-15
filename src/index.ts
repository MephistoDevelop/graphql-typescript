import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../resolvers/UserResolver"
import { RecetaResolver } from "../resolvers/RecetaResolver"
import  {CategoriaResolver } from "../resolvers/CategoriaResolver"


async function main(){
    try{
        const connection = await createConnection();
        await connection.synchronize();
        
        const schema = await buildSchema({
            resolvers: [UserResolver,RecetaResolver,CategoriaResolver]
        });
        const server = new ApolloServer({ schema });
        await server.listen(4000);
        console.log("Server has started");
    } catch(error){
        console.log("Connection Error... ",error)
    }
}

main()