export class Person {
    fName: string;
    lName: string;
    age: string;

    constructor(fName: string, lName: string, age: string){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms));
       }

    getFName(): string{
        return this.fName;
    }
    getLNames(): string{
        return this.lName;
    }
    getFullName(): string{
        return this.fName + " " + this.lName;
    }
    getAge(): string{
        return this.age;
    }

}