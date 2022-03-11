import { Controller, Get, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from 'src/models/user.entity';
import { UserService } from './user.service';

@Crud({
    model:{
        type:User,
    },
    params: {
        id: {
            type: 'uuid',
            primary: true,
            field: 'id',
        },
    },
})
@Controller('user')
export class UserController {
    constructor(public service: UserService){ }
}


