import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;
}
