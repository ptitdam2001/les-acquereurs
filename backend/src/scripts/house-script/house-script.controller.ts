import { Controller } from '@nestjs/common';
import { HouseService } from '../../house/services/house.service';

import * as fs from 'fs';
import * as path from 'path';

@Controller('house-script')
export class HouseScriptController {
  constructor(private readonly houseService: HouseService) {}

  setOneHouse() {
    // Load file
    const json = JSON.parse(
      fs.readFileSync(path.resolve('mock/house.json')).toString(),
    );
    // tslint:disable-next-line:no-console
    this.houseService
      .create(json)
      .then(created => console.log('House created'))
      .catch(err => console.log('house creation error : ', err));
  }
}
