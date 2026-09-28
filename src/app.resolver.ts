import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service.js';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}
}
