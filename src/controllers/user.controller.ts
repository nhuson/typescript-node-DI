import { Controller, Get } from '@nestjs/common';
import BaseController from './base.controller';
import UserService from '../services/user.service'

@Controller('user')
export default class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super()
  }

  @Get()
  getHello(): string {
    return this.userService.getHello()
  }
}
