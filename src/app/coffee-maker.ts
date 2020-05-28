export class CoffeeMaker{
    private brand: string;
    private hasTimer: boolean;

    constructor(brand: string, hasTimer:boolean){
        this.brand = brand;
        this.hasTimer = hasTimer;
    }

    getBrand(): string{
        return this.brand;
    }
    setBrand(brand: string): void{
        this.brand = brand;
    }

    getHasTimer(): boolean{
        return this.hasTimer;
    }
    setHasTimer(hasTimer: boolean): void{
        this.hasTimer = hasTimer;
    }
}