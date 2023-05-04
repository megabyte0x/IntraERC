import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HyperlaneService } from './hyperlane/hyperlane.service';
import { HyperlaneModule } from './hyperlane/hyperlane.module';

@Module({
  imports: [HyperlaneModule],
  controllers: [AppController],
  providers: [AppService, HyperlaneService],
})
export class AppModule {}
