import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../../shared/src/public-api';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { SupervisorUiComponent } from './supervisor-ui/supervisor-ui.component';
import { EmployeeUiComponent } from './employee-ui/employee-ui.component';

const COMPONENT_MAPPING = {
  admin: AdminUiComponent,
  supervisor: SupervisorUiComponent,
  employee: EmployeeUiComponent,
};

@Component({
  selector: 'lib-dynamic-components-demo',
  standalone: true,
  imports: [],
  templateUrl: 'dynamic-components-demo.component.html',
  styleUrl: 'dynamic-components-demo.component.scss',
})
export class DynamicComponentsDemoComponent implements OnInit, OnDestroy {
  @ViewChild('outlet', { read: ViewContainerRef, static: true })
  private _outlet!: ViewContainerRef;
  private _onDestroy$: Subject<boolean> = new Subject<boolean>();
  private _sharedService: SharedService = inject(SharedService);
  private _userTypeResponsibilities = {
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

  ngOnInit(): void {
    this._listenForCurrentEmployee();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true);
    this._onDestroy$.complete();
  }

  private _listenForCurrentEmployee(): void {
    this._sharedService
      .getLoggedInType()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe({
        next: (type) => {
          if (this._outlet) {
            this._outlet.clear();
            const componentToInject = COMPONENT_MAPPING[type];
            if (componentToInject) {
              const componentRef =
                this._outlet.createComponent(componentToInject);
              componentRef.instance.roles =
                this._userTypeResponsibilities[type];
              componentRef.changeDetectorRef.detectChanges();
            }
          }
        },
      });
  }
}
