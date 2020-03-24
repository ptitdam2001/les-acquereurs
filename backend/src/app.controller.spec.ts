import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('checkServer', () => {
    it('should return an object with message equals to "server OK"', () => {
      expect(appController.checkServer()).toEqual({ message: 'server OK' });
    });
  });
});
