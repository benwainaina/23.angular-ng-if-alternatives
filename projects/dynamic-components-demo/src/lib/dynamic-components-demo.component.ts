import {
  Component,
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
    console.log('_outlet', this._outlet.element);
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
            /**
             * First, clear the outlet, so that if anything was rendered onto it before,
             * it will not be there on the next render
             */
            this._outlet.clear();

            /**
             * Then we pick the component to inject, and ensure that the type
             * which we have selected actually has a component, and this way,
             * we do not inject a null.
             */
            const componentToInject = COMPONENT_MAPPING[type];
            if (componentToInject) {
              /**
               * Then, we create the component and get a component reference returned to us.
               */
              const componentRef =
                this._outlet.createComponent(componentToInject);

              /**
               * Now, using the component reference, we can directly pass into it values,
               * and in this case, we are passing in the appropriate roles based on the user type.
               */
              componentRef.instance.roles =
                this._userTypeResponsibilities[type];

              /**
               * Lastly, we call the ChangeDetectorRef in the component reference,
               * so that we can trigger change detection.
               */
              componentRef.changeDetectorRef.detectChanges();
            }
          }
        },
      });
  }
}
