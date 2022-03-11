import { User } from 'src/models/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class UserService extends TypeOrmCrudService<User> {
    constructor(repo: any);
}
