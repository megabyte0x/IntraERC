import { Test, TestingModule } from '@nestjs/testing';
import { HyperlaneService } from './hyperlane.service';

describe('HyperlaneService', () => {
  let service: HyperlaneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HyperlaneService],
    }).compile();

    service = module.get<HyperlaneService>(HyperlaneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
