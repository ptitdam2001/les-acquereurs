import { CompanyScriptController } from './scripts/company-script/company-script.controller';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { ScriptsModule } from './scripts/scripts.module';
import { HouseScriptController } from './scripts/house-script/house-script.controller';
import { RolesScriptController } from './scripts/roles-script/roles-script.controller';

declare const module: any;

async function bootstrap() {
  const scriptContext = await NestFactory.createApplicationContext(AppModule);
  const houseController = scriptContext
    .select(ScriptsModule)
    .get(HouseScriptController, { strict: true });
  const companyController = scriptContext
    .select(ScriptsModule)
    .get(CompanyScriptController, { strict: true });
  const rolesController = scriptContext
    .select(ScriptsModule)
    .get(RolesScriptController, { strict: true });

  houseController.setOneHouse();

  companyController.setOneCompany();

  rolesController.setAdminRoles();

  return;
}
bootstrap();
