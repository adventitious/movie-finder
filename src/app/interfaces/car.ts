export interface ICar {

    make:string;
    model:string;
    year:string;
    imageURL:string;
    
}

export class car implements ICar{
    make:string;
    model:string;
    year:string;
    imageURL:string;

    
    constructor( make:string,    model:string,    year:string,    imageURL:string )
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }
}