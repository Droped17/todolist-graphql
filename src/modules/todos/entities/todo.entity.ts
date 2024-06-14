import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Todo {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isCompleted: boolean;
}
