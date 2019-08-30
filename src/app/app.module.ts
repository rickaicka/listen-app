import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import {
  HttpMethod,
  NG_ENTITY_SERVICE_CONFIG,
  NgEntityServiceGlobalConfig
} from '@datorama/akita-ng-entity-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'https://api.spotify.com/v1'
      }
    },
    {
      provide: 'BASE_URL',
      useValue: {
        baseUrl: 'https://api.spotify.com/v1'
      }
    },
    {
      provide: 'AUTH_BASE',
      useValue: {
        baseUrl: 'https://accounts.spotify.com/authorize'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
