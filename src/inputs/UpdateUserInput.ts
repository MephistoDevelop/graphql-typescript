import { InputType,Field } from "type-graphql";

@InputType()

export class UpdateUserInput{
    @Field({nullable: true})
    name?: String

    @Field({ nullable: true})
    email?: String;

    @Field({ nullable: true})
    password?: String;
}