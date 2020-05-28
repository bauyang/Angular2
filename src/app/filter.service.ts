import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterInput: string = "";
  private personArray: Person[] = [
    new Person("John", "Doe", "22"),
    new Person("Kim", "Johnson", "28"),
    new Person( "Jamie", "Jone", "45")
  ];

  constructor(private http: HttpClient ) { }

  getPerson(): Person[] {
    return this.personArray.filter((person)=> {
      return person.getFullName().toLowerCase().includes(this.filterInput.toLowerCase());
    });
  }

  setFilter(formInput: string): void {
    this.filterInput = formInput;
  }

  getTasks(): Observable<any>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos"); 

  }
}
