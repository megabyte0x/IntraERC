import { Injectable } from '@nestjs/common';
import { deployHyperlane } from 'src/sdk/src/invoke';
import { deployRequest } from './dto/hyperlane.dto';

@Injectable()
export class HyperlaneService {

    getHi(): string {
        return 'Hello HI!';
      }

      deployHyperlane(payload :deployRequest): any {
      return deployHyperlane(payload);
    }

}
