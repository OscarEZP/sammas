import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Teams } from './team.entity';

@Entity('groups')
export class Groups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Teams, (team) => team.group)
  @JoinColumn()
  teams: Teams[];
}
