import { Component } from '@angular/core';
import { BaseUIComponent } from '../base.ui.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-employee-ui',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-ui.component.html',
  styleUrl: './employee-ui.component.scss',
})
export class EmployeeUiComponent extends BaseUIComponent {}
