import { Injectable } from '@nestjs/common';
import BaseRepository from './base.repository'
import UserInterface from '../interfaces/user.interface'

@Injectable()
export default class UserRepository extends BaseRepository implements UserInterface {
  
  getHello() : string {
    return "get hello!!"
  }
}
