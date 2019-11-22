import {Component, OnInit} from '@angular/core';


import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireAuth} from '@angular/fire/auth';
import IGpsAddress from '../models/IGpsAddress';
import {Router} from '@angular/router';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {v4 as uuid} from 'uuid';



@Component({
    selector: 'app-add-office',
    templateUrl: './add-office.page.html',
    styleUrls: ['./add-office.page.scss'],
})
export class AddOfficePage implements OnInit {
    public newOfficeForm: FormGroup;
    public gpsLocation: IGpsAddress;
    public isLoading = false;
    public cameraPreview = '';


    constructor(
        public formBuilder: FormBuilder,
        private camera: Camera,
        private geoLoc: Geolocation,
        private db: AngularFirestore,
        private auth: AngularFireAuth,
        private fireStorage: AngularFireStorage,
        public router: Router,
    ) {

        this.newOfficeForm = formBuilder.group({
            name: ['', Validators.required],
            _capacity: ['', Validators.required],
            price: ['', Validators.required],
            address: [''],
            desc: ['']
        });

    }

    async getGpsLoc() {
        this.isLoading = true;
        try {
            const geoLocCords = await this.geoLoc.getCurrentPosition();
            // tslint:disable-next-line:max-line-length
            const geoLocAddress = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${geoLocCords.coords.latitude}&lon=${geoLocCords.coords.longitude}&zoom18&addressdetails=1`);
            const geoCodeResponse = await geoLocAddress.json();

            this.gpsLocation = {
                city_district: geoCodeResponse.address.city_district,
                house_number: geoCodeResponse.address.house_number,
                road: geoCodeResponse.address.road,
                city: geoCodeResponse.address.city,
                suburb: geoCodeResponse.address.suburb,
            };
            this.gpsLocation.display_address = `${this.gpsLocation.road} ${this.gpsLocation.house_number} ${this.gpsLocation.city}`;
            this.isLoading = false;
            this.newOfficeForm.controls['address'].setValue(this.gpsLocation.display_address);

        } catch (e) {
            console.log(e);
        }

    }

    async submitForm() {

        const uploadedImgUrl = await this.uploadPicToFireStore();
        console.log(uploadedImgUrl);
        const placeholderUrl = 'https://media.istockphoto.com/photos/modern-business-office-space-with-lobby-picture-id811843986?k=6&m=811843986&s=612x612&w=0&h=kLumP1YCUrdhZifJC66Z09aShsYroR--ap24oUtsZGw='

        await this.db.collection('office').add({
            name: this.newOfficeForm.value.name,
            address: this.newOfficeForm.value.address,
            capacity: this.newOfficeForm.value._capacity,
            price: this.newOfficeForm.value.price,
            desc: this.newOfficeForm.value.desc,
            isAvailable: true,
            imageUrl: uploadedImgUrl ? uploadedImgUrl : placeholderUrl,
            uploaded: Date.now()
        });

        this.newOfficeForm.reset();
        this.cameraPreview = '';
        this.router.navigate(['tabs/home']);

    }

    async takePicture() {

        const options: CameraOptions = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL, //FILE_URL
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };

        try {
            this.cameraPreview = await this.camera.getPicture(options);

        } catch (e) {
            console.log(e);
        }
    }

 // Fra forelesning slide nr 9 - side 15
    async uploadPicToFireStore() {
        if (this.cameraPreview) {
            const fileName = `office-${uuid()}.png`;
            const fileStorageRef = this.fireStorage.ref(fileName);

            const upload = fileStorageRef.putString(this.cameraPreview,
                'base64',
                {contentType: 'image/png'});

            await upload.then();

            return fileStorageRef.getDownloadURL().toPromise();
        }
    }

    ngOnInit() {

    }


}
