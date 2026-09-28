import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'the unique id of a user' })
  id: number;

  @Field(() => String, { description: 'the name of the user' })
  name: string;

  @Field(() => String, { description: 'the email of the user' })
  email: string;
}
