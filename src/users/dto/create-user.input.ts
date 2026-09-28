import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'the unique id of a user' })
  id: number;

  @Field(() => String, { description: 'the name of the user' })
  name: string;

  @Field(() => String, { description: 'the email of the user' })
  email: string;
}
