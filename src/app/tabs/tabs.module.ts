import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {TabsPage} from './tabs.page';

import {TabsRoutingModule} from './tabs-routing.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        TabsRoutingModule,

    ],
    providers: [Geolocation,
        {provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy}],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
