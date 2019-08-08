import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async makeTest(): Promise<User> {

    const u = new User();
    u.email = 'asd@dsa.ds';

    await this.userRepository.insert(u);
    return u;
  }
}
