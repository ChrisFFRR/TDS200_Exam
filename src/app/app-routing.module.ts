import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        loadChildren: './tabs/tabs.module#TabsPageModule',
        ...canActivate(redirectUnauthorizedTo(['login']))
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule',
        ...canActivate(redirectLoggedInTo(['tabs/home']))
    },
    {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpPageModule',
        ...canActivate(redirectLoggedInTo(['tabs/home']))
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
