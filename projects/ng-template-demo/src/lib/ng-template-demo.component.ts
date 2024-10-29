import {
  AsyncPipe,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
} from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedService } from '../../../shared/src/public-api';

@Component({
  selector: 'lib-ng-template-demo',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgTemplateOutlet, AsyncPipe, NgFor],
  templateUrl: 'ng-template-demo.component.html',
  styleUrl: 'ng-template-demo.component.scss',
})
export class NgTemplateDemoComponent {
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
