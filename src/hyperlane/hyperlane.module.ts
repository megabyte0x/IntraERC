import { Module } from '@nestjs/common';
import { HyperlaneService } from './hyperlane.service';
import { HyperlaneController } from './hyperlane.controller';

@Module({
  providers: [HyperlaneService],
  controllers: [HyperlaneController]
})
export class HyperlaneModule {}
