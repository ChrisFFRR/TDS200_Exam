import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {ComponentsModules} from './components/components.modules';
import {DetailmodalPage} from './detailmodal/detailmodal.page';
import {DetailmodalPageModule} from './detailmodal/detailmodal.module';
import {LoginPageModule} from './login/login.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';


const firebaseConfig = {
    apiKey: 'AIzaSyDmrH1Ro2wV-zJ2z8o8HSgpbzjQBeIIYVk',
    authDomain: 'office-space-3f697.firebaseapp.com',
    databaseURL: 'https://office-space-3f697.firebaseio.com',
    projectId: 'office-space-3f697',
    storageBucket: 'office-space-3f697.appspot.com',
    messagingSenderId: '1060597420500',
    appId: '1:1060597420500:web:7300dca25d11fa2d154641',
    measurementId: 'G-0B8QZ11H9Z'
};


@NgModule({
    declarations: [AppComponent],
    entryComponents: [DetailmodalPage],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireAuthGuardModule,
        ComponentsModules,
        DetailmodalPageModule,
        LoginPageModule],

    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        Camera,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
