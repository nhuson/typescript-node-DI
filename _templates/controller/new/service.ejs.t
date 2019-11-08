---
to: src/services/<%= name.toLowerCase() %>.service.ts
---
import { Injectable, Inject } from '@nestjs/common';
import BaseService from './base.service'

@Injectable()
export default class <%= name[0].toUpperCase() + name.slice(1) %>Service extends BaseService {
  constructor() {
    super()
  }

  index(): string {
    return "<%= name.toLowerCase() %>Service"
  }
}
