---
to: src/interfaces/<%= name.toLowerCase() %>.interface.ts
---
import BaseInterface from './base.interface'

export default interface <%= name[0].toUpperCase() + name.slice(1) %>Interface extends BaseInterface {

}