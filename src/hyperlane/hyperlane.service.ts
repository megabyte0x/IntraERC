import { Injectable } from '@nestjs/common';

@Injectable()
export class HyperlaneService {

    getHi(): string {
        return 'Hello HI!';
      }

}
