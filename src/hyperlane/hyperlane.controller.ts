import { Controller, Get } from '@nestjs/common';
import {HyperlaneService} from '../hyperlane/hyperlane.service'
@Controller('hyperlane')
export class HyperlaneController {
    constructor(private readonly hyperlaneService: HyperlaneService) {}
   
    @Get('hi')
    getHello(): string {
      return this.hyperlaneService.getHi();
    }

    @Get('enroll/admin')
    async enrollAdmin() {
        try {
            return this.hyperlaneService.getHi();
        } catch (error) {
            return error
        }
    }

    
}
