import { Component } from '@angular/core';
import { BaseUIComponent } from '../base.ui.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'lib-admin-ui',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './admin-ui.component.html',
  styleUrl: './admin-ui.component.scss',
})
export class AdminUiComponent extends BaseUIComponent {}
