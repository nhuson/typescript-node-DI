---
to: src/repositories/<%= name.toLowerCase() %>.repository.ts
---
import { Injectable } from '@nestjs/common';
import BaseRepository from './base.repository'
import <%= name[0].toUpperCase() + name.slice(1) %>Interface from '../interfaces/<%= name.toLowerCase() %>.interface'

@Injectable()
export default class <%= name[0].toUpperCase() + name.slice(1) %>Repository extends BaseRepository implements <%= name[0].toUpperCase() + name.slice(1) %>Interface {

}
