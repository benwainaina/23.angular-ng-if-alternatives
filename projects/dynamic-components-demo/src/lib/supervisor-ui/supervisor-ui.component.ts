import { Component } from '@angular/core';
import { BaseUIComponent } from '../base.ui.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-supervisor-ui',
  standalone: true,
  imports: [NgFor],
  templateUrl: './supervisor-ui.component.html',
  styleUrl: './supervisor-ui.component.scss',
})
export class SupervisorUiComponent extends BaseUIComponent {}
