import { InputType,Field,ID } from "type-graphql";

@InputType()
export class CreateUserInput{

    @Field()
    name: String;

    @Field()
    email: String;

    @Field()
    password: String;
}