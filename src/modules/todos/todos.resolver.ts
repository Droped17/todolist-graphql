import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todos.service';
import { TodoType } from './dto/todo.dto';
import { CreateTodoInput, UpdateTodoInput } from './dto/todo.dto';

@Resolver(() => TodoType)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoType])
  async todos() {
    return this.todoService.findAll();
  }

  @Query(() => TodoType)
  async todo(@Args('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => TodoType)
  async createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => TodoType)
  async updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Boolean)
  async removeTodo(@Args('id') id: string) {
    await this.todoService.remove(id);
    return true;
  }
}
