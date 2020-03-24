import { UserModule } from './../user/user.module';
import { CompanyModule } from './../company/company.module';
import { HouseModule } from './../house/house.module';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { HouseScriptController } from './house-script/house-script.controller';
import { CompanyScriptController } from './company-script/company-script.controller';
import { RolesScriptController } from './roles-script/roles-script.controller';

@Module({
  imports: [DatabaseModule, HouseModule, CompanyModule, UserModule],
  controllers: [
    HouseScriptController,
    CompanyScriptController,
    RolesScriptController,
  ],
})
export class ScriptsModule {}
