import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ng-if-reference',
    loadComponent: () =>
      import(
        '../../projects/ng-if-reference/src/lib/ng-if-reference.component'
      ).then((c) => c.NgIfReferenceComponent),
  },
  {
    path: 'ng-switch-demo',
    loadComponent: () =>
      import(
        '../../projects/ng-switch-demo/src/lib/ng-switch-demo.component'
      ).then((c) => c.NgSwitchDemoComponent),
  },
  {
    path: 'ng-template-demo',
    loadComponent: () =>
      import(
        '../../projects/ng-template-demo/src/lib/ng-template-demo.component'
      ).then((c) => c.NgTemplateDemoComponent),
  },
  {
    path: 'dynamic-components-demo',
    loadComponent: () =>
      import(
        '../../projects/dynamic-components-demo/src/lib/dynamic-components-demo.component'
      ).then((c) => c.DynamicComponentsDemoComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ng-template-demo',
  },
];
