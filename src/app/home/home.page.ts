import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


import IOffice from '../models/IOffice';

import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    //  private offices$: Observable<IOffice[]>;

     officeList: IOffice[] = [];
     filteredList: IOffice[] = [];


    constructor(
        private db: AngularFirestore,
        private auth: AngularFireAuth,
        public router: Router) {

    }


    ngOnInit() {
        // https://youtu.be/bA67tjZWP94?t=327
        this.db.collection('office').snapshotChanges().subscribe(dbDoc => {
            this.officeList = [];
            dbDoc.forEach(index => {
                const officeItem: any = index.payload.doc.data();
                officeItem.id = index.payload.doc.id;
                this.officeList.push(officeItem);
            });
            this.filteredList = (this.officeList.map(office => office));
        });
    }

    filterList(event) {
        const filteredString = event.detail.value;
        switch (filteredString) {
            case 'booked':
                console.log('booked');
                this.filteredList = this.officeList.filter(office => office.isAvailable === false);
                return;
            case 'available':
                console.log('ledig');
                this.filteredList = this.officeList.filter(office => office.isAvailable === true);
                return;
            default:
                console.log('alle');
                this.filteredList = (this.officeList.map(office => office));
                return;
        }
    }

    signOut() {
        return this.auth.auth.signOut().then(() => {
            this.router.navigate(['login']);
        });
    }


}
