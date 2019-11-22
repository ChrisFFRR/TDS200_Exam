import {Component, Input, OnInit, Output} from '@angular/core';

import IOffice from '../../models/IOffice';
import {DetailmodalPage} from '../../detailmodal/detailmodal.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-office-card-item',
    templateUrl: './office-card-item.component.html',
    styleUrls: ['./office-card-item.component.scss'],
})
export class OfficeCardItemComponent implements OnInit {

    @Input() officeData: IOffice;


    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: DetailmodalPage,
            animated: true,
            componentProps: this.officeData
        });
        return await modal.present();
    }

}
