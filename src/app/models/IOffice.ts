export default interface IOffice {
    id?: string;
    name: string;
    address: string;
    city: string;
    isAvailable: boolean;
    capacity: number;
    imageUrl: string;
    desc: string;
    price: number;
    uploaded: number;
}
