import { Injectable } from '@nestjs/common';
import BaseRepository from './base.repository'
import CategoryInterface from '../interfaces/category.interface'

@Injectable()
export default class UserRepository extends BaseRepository implements CategoryInterface {
  
  getCategory() : string {
    return "get category"
  }
}
