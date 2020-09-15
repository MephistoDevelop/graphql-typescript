import { InputType,Field} from "type-graphql";

@InputType()
export class CreateRecetaInput{
    @Field()
    Name: String

    @Field()
    Description: String
    
    @Field()
    Ingredients: String

    @Field()
    Category: String
}