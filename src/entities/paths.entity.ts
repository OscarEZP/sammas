import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Teams } from './team.entity';

@Entity('paths')
export class Paths {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  englishName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Teams, (team) => team, { cascade: true })
  @JoinColumn()
  teams: Teams[];
}
