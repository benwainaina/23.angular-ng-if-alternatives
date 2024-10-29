import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  SharedService,
  TUserTypes,
} from '../../projects/shared/src/public-api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private _sharedService: SharedService = inject(SharedService);
  private _onDestroy$: Subject<boolean> = new Subject<boolean>();

  public employeeControl: FormControl = new FormControl('admin');

  ngOnInit(): void {
    this._listenForEmployeeTypeChange();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true);
    this._onDestroy$.complete();
  }

  private _listenForEmployeeTypeChange(): void {
    this.employeeControl.valueChanges
      .pipe(takeUntil(this._onDestroy$))
      .subscribe({
        next: (userType) => this._sharedService.setLoggedInType(userType),
      });
  }
}
