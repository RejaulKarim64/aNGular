export class Student {
    id !: string;
    name !: string;
    email !: string;
    fee !: number;
    location !: {
        id: string;
        name: string;
        city: string;
        photo: string;
    };

}