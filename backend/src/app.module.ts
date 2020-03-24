import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';
import { HouseModule } from './house/house.module';
import { ScriptsModule } from './scripts/scripts.module';

@Module({
  imports: [
    DatabaseModule,
    CoreModule,
    CompanyModule,
    UserModule,
    MediaModule,
    HouseModule,
    ScriptsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
