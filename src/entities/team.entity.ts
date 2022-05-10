import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Groups } from './groups.entity';
import { Paths } from './paths.entity';

@Entity('teams')
export class Teams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  homeName: string;

  @Column('varchar')
  awayName: string;

  @Column('varchar')
  start: Date;

  @Column('varchar')
  type: string;

  @Column('varchar')
  sport: string;

  @Column('varchar')
  state: string;

  @Column('boolean')
  liveBetOffers: boolean;

  @Column('boolean')
  openForLiveBetting: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Groups, (group) => group, { cascade: true })
  @JoinColumn()
  group: Groups;

  @OneToMany(() => Paths, (path) => path.teams)
  @JoinColumn()
  paths: Paths[];
}
