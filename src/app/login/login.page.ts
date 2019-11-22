import {Component, OnInit} from '@angular/core';
import IUser from '../models/IUser';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

     user: IUser = {password: '', email: ''};

    constructor(
        private fireAuth: AngularFireAuth,
        private router: Router,
        public toastController: ToastController
    ) {
    }
    ngOnInit() {
    }

    async loginUser() {
        const {email, password} = this.user;
        try {
            await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
            await this.router.navigate(['tabs/home']);
        } catch (err) {
            await this.makeToast(err);
        }
    }


    async makeToast(msg) {
        const toast = await this.toastController.create({
            message: msg.toString().slice(6),
            position: 'bottom',
            cssClass: 'toast-error',
            color: 'warning',
            animated: true,
            duration: 2000
        });
        await toast.present();
    }
}
