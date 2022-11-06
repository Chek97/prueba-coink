import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get(this.url);
  }

  getCharacterByName(name: string, type: string){
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}&type=${type}`);
  }
}
