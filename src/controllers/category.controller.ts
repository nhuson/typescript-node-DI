import { Controller, Get } from '@nestjs/common';
import BaseController from './base.controller';
import CategoryService from '../services/category.service'

@Controller('category')
export default class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super()
  }

  @Get()
  getaaaa(): string {
    return this.categoryService.getCategory()
  }
}
