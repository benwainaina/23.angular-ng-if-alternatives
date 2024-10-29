import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedService } from '../../../shared/src/public-api';

@Component({
  selector: 'lib-ng-if-reference',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor],
  templateUrl: 'ng-if-reference.component.html',
  styleUrl: 'ng-if-reference.component.scss',
})
export class NgIfReferenceComponent {
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
