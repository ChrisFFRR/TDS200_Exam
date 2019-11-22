import {Component, OnInit} from '@angular/core';
import IUser from '../models/IUser';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

     user: IUser = {email: '', password: '', firstname: '', surname: '', city: ''};

    constructor(private fireAuth: AngularFireAuth,
                private router: Router,
                private toastController: ToastController) {
    }

    ngOnInit() {
    }

    async registerUser() {
        const {email, password, firstname, surname, city} = this.user;
        if ((firstname === '') || (surname === '') || (city === '')) {
            await this.makeToast('Please enter all inputs');

        } else {
            try {
                await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
                await this.router.navigate(['tabs/home']);

            } catch (err) {
                await this.makeToast(err.toString().slice(6));
            }
        }
    }

    async makeToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            position: 'bottom',
            cssClass: 'toast-error',
            color: 'warning',
            animated: true,
            duration: 2000
        });
        await toast.present();
    }

}
