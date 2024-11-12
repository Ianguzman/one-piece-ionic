import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import { AngularFireModule } from '@angular/fire/compat'; // Cambiar a la versión "compat" si es necesario
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HeadersInterceptor } from './interceptors/header.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';


export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,  'assets/i18n/', '.json')
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({mode :'md'}), 
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicialización antigua
    AngularFireAuthModule,
     // Importar el módulo de autenticación,
   
    HttpClientModule,
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: !isDevMode(),
       // Register the ServiceWorker as soon as the application is stable
       // or after 30 seconds (whichever comes first).
       registrationStrategy: 'registerWhenStable:30000'
     }),

   ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
