import { Body, Controller, Get, Post } from '@nestjs/common';
import {HyperlaneService} from '../hyperlane/hyperlane.service'
import { deployRequest } from './dto/hyperlane.dto';
@Controller('hyperlane')
export class HyperlaneController {
    constructor(private readonly hyperlaneService: HyperlaneService) {}
   


    @Get('')
    async enrollAdmin() {
        try {
            return this.hyperlaneService.getHi();
        } catch (error) {
            return error
        }
    }

    @Post('/deploy' )
    async deployHyperlane(@Body() payload: deployRequest){
        try {
            console.log("payload",payload);
            return this.hyperlaneService.deployHyperlane(payload);
        } catch (error) {
            return error
        }
    }

    
}
