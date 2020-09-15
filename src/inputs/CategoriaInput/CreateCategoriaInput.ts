import {Field,InputType} from "type-graphql";

@InputType()
export class CreateCategoriaInput{
    @Field()
    Name: String
}