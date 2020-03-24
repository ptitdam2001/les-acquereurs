import { RoleService } from './../../user/services/role.service';
import { Controller } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('roles-script')
export class RolesScriptController {
  constructor(private readonly roleService: RoleService) {}

  setAdminRoles() {
    // Load file
    const json = JSON.parse(
      fs.readFileSync(path.resolve('mock/roles.json')).toString(),
    );

    if (json.length > 0) {
      const promises: any[] = json.map(element =>
        this.roleService.create(element),
      );
      // tslint:disable-next-line:no-console
      Promise.all(promises)
        .then(() => console.log('roles created'))
        .catch(() => console.log('error into roles'));
    }
  }
}
