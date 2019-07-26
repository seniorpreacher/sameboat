import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  // @ManyToOne(type => Organisation)
  // @JoinColumn()
  // organisation: Organisation;
}
