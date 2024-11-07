import { Component, inject } from '@angular/core';
import { SharedService } from '../../../shared/src/public-api';
import {
  AsyncPipe,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'lib-ng-switch-demo',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe],
  templateUrl: 'ng-switch-demo.component.html',
  styleUrl: 'ng-switch-demo.component.scss',
})
export class NgSwitchDemoComponent {
  public sharedService: SharedService = inject(SharedService);
  public userTypeResponsibilities = {
    admin: [
      'Reset all accounts credentials',
      'Schedule all departments meetings',
      'Make company-wide announcement',
    ],
    supervisor: [
      'Manage employee accounts in your departments',
      'Schedule departmental meetings',
      'Make departmental announcements',
    ],
    employee: [
      'Log when you have entered the office',
      'Make requests for equipments like paper clips etc',
      'Request credentials re-setting',
    ],
  };
}
