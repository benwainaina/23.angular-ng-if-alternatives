import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';

@Component({
  template: '',
})
export class BaseUIComponent {
  @Input() roles!: Array<string>;
}
