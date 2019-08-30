import { Injectable, Inject } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { LoginStore } from './login.store';
import { Login, createScopesAuth } from './login.model';
import { NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
@NgEntityServiceConfig({
  resourceName: 'logins'
})
@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private loginStore: LoginStore,
              private http: HttpClient,
              private store: LoginStore,
              @Inject('BASE_URL') private baseUrl: string,
              @Inject('AUTH_BASE') private authUrl: string) {
  }

  get() {

    console.log(this.authUrl);
    //this.http.get('/login').subscribe((entities: any) => this.loginStore.set(entities));
  }

  addLogin(){
    const a = createScopesAuth();
    console.log(a);
  }

  add(login: Login) {
    this.loginStore.add(login);
  }

  update(id, login: Partial<Login>) {
    this.loginStore.update(id, login);
  }

  remove(id: ID) {
    this.loginStore.remove(id);
  }

  show(){
    console.log(this.authUrl);
  }
}
