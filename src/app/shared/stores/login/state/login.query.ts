import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LoginStore, LoginState } from './login.store';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginQuery extends QueryEntity<LoginState, Login> {

  constructor(protected store: LoginStore) {
    super(store);
  }

}
