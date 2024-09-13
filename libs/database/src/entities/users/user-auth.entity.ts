import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { UserAuthRoleEnum } from '../../types';

@Entity()
export class UserAuth {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({
    type: 'enum',
    enum: UserAuthRoleEnum,
    default: UserAuthRoleEnum.USER,
  })
  role: UserAuthRoleEnum;

  @Column({ default: null, type: 'varchar', length: 255 })
  salt: string;

  @Column({ type: 'varchar', length: 255, default: null })
  access_token: string;

  @Column({ default: null, type: 'varchar', length: 255 })
  refresh_token: string;

  @OneToOne(() => User)
  user: User;
}
