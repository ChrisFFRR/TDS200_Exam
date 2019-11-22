import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-detailmodal',
    templateUrl: './detailmodal.page.html',
    styleUrls: ['./detailmodal.page.scss'],
})
export class DetailmodalPage implements OnInit {
    officeDetails = null;

    constructor(private navParams: NavParams, public modalController: ModalController, private db: AngularFirestore) {
    }

    ngOnInit() {
        this.officeDetails = this.navParams.data;
        console.log(this.officeDetails.desc);
    }

    bookOffice() {
        const updateDocument = this.db.doc(`office/${this.officeDetails.id}`);
        updateDocument.update( {
            isAvailable: false
        });
        this.dismiss();
    }
    dismiss() {
        this.modalController.dismiss();
    }
}
