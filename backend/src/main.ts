import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as config from 'config';

// declare const module: any;

async function bootstrap() {
  const port = parseInt(config.get('server.port'), 0) || 3000;

  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('Les-acquereurs API')
    .setDescription('Available routes of API')
    .setVersion('2.0')
    .addTag('companies')
    .addTag('houses')
    .addTag('medias')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
}
bootstrap();
