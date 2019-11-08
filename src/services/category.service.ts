import { Injectable, Inject } from '@nestjs/common';
import BaseService from './base.service'
import CategoryInterface from '../interfaces/category.interface'

@Injectable()
export default class CategoryService extends BaseService {
  constructor(@Inject('CategoryInterface') private readonly categoryRepo : CategoryInterface) {
    super()
  }
  getCategory(): string {
    return this.categoryRepo.getCategory()
  }
}
