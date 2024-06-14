import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isCompleted: boolean;
}

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field()
  description: string;
}

@InputType()
export class UpdateTodoInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isCompleted?: boolean;
}
