---
to: src/controllers/<%= name.toLowerCase() %>.controller.ts
---
import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import BaseController from './base.controller';
import <%= name[0].toUpperCase() + name.slice(1) %>Service from '../services/<%= name.toLowerCase() %>.service';

@Controller('<%= name.toLowerCase() %>')
export default class <%= name %>Controller extends BaseController {
  constructor(private readonly <%= name.toLowerCase() %>Service: <%= name[0].toUpperCase() + name.slice(1) %>Service) {
    super()
  }


  @Get()
  index() {
    return this.<%= name.toLowerCase() %>Service.index()
  }

  @Post()
  create() {
    
  }

  @Patch()
  update() {
    
  }

  @Delete()
  delete() {

  }
}