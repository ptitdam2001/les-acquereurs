import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './../company/company.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { RoleController } from './role.controller';
import { UserSchema, RoleSchema } from './schemas';
import { RoleService } from './services/role.service';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Roles', schema: RoleSchema }]),
  ],
  controllers: [UserController, RoleController],
  providers: [UserService, RoleService],
  exports: [UserService, RoleService],
})
export class UserModule {}
