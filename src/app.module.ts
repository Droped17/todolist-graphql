import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos/todos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { graphqlConfig } from './config/graphql.config';
import { Todo } from './modules/todos/entities/todo.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig()),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/todo-app',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Todo],
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
