import { Test, TestingModule } from '@nestjs/testing';
import { HyperlaneController } from './hyperlane.controller';

describe('HyperlaneController', () => {
  let controller: HyperlaneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HyperlaneController],
    }).compile();

    controller = module.get<HyperlaneController>(HyperlaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
