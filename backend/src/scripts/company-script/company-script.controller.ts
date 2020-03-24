import { CompanyService } from './../../company/services/company.service';
import { Controller } from '@nestjs/common';

import * as fs from 'fs';
import * as path from 'path';

@Controller('company-script')
export class CompanyScriptController {
  constructor(private readonly companyService: CompanyService) {}

  setOneCompany() {
    // Load file
    const json = JSON.parse(
      fs.readFileSync(path.resolve('mock/company.json')).toString(),
    );
    this.companyService
      .create(json)
      // tslint:disable-next-line:no-console
      .then(created => console.log('Company created'))
      .catch(err => console.log('company creation error : ', err));
  }
}
