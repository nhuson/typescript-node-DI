import { Injectable, Inject } from '@nestjs/common';
import BaseService from './base.service'
import UserInterface from '../interfaces/user.interface'

@Injectable()
export default class UserService extends BaseService {
  constructor(@Inject('UserInterface') private readonly userRepo: UserInterface) {
    super()
  }

  getHello(): string {
    return this.userRepo.getHello()
  }
}

