import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField()
  posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
