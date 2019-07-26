import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async makeTest(): Promise<User> {

    const u = new User();
    u.email = 'asd@dsa.ds';

    await this.userRepository.insert(u);
    return u;
  }
}
