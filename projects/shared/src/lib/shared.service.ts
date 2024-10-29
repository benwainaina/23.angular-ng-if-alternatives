import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type TUserTypes = 'admin' | 'supervisor' | 'employee';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _loggedInAs$: BehaviorSubject<TUserTypes> =
    new BehaviorSubject<TUserTypes>('admin');

  constructor() {}

  public setLoggedInType(type: TUserTypes): void {
    this._loggedInAs$.next(type);
  }

  public getLoggedInType(): Observable<TUserTypes> {
    return this._loggedInAs$;
  }
}
