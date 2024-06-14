import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './dto/todo.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    const objectId = new ObjectId(id);
    return this.todoRepository.findOneBy({ id: objectId });
  }

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const newTodo = this.todoRepository.create(createTodoInput);
    return this.todoRepository.save(newTodo);
  }

  async update(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo> {
    const objectId = new ObjectId(id);
    await this.todoRepository.update(objectId, updateTodoInput);
    return this.todoRepository.findOneBy({ id: objectId });
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
