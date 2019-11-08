import UserRepository from '../repositories/user.repository'
import CategoryRepository from '../repositories/category.repository'

const mapping = [
  { provide: 'UserInterface', useClass: UserRepository },
  { provide: 'CategoryInterface', useClass: CategoryRepository }
]
export { mapping }