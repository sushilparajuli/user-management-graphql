import { User } from './entities/user.entity.js';
import { UsersService } from './users.service.js';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query('users')
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query('user')
  async getUser(@Args('id') id: number): Promise<User | undefined> {
    return this.usersService.findOne(id);
  }

  @Mutation('createUser')
  async addUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<User> {
    return this.usersService.create({ name, email });
  }
}
