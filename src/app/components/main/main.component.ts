import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faUserCircle, faBars, faSearch, faLock } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  characters: any = {};
  faUserCircle = faUserCircle;
  faBars = faBars;
  faSearch = faSearch;
  faLock = faLock;

  error: boolean = false;
  errorMessage: string = '';

  inputName: string = '';
  
  displayedColumns: string[] = ['name', 'gender', 'species', 'created'];
  dataSource: PeriodicElement[] = [];
  
  constructor(private _dataService: DataService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    this._dataService.getAllCharacters()
      .subscribe((resp: any) => {
        this.dataSource = resp.results;
      });
  }

  search(name: string, type: string){
    this._dataService.getCharacterByName(name, type)
      .subscribe((resp: any) => {
        this.dataSource = resp.results;
      }, (error: any) => {
        this.error = true;
        this.errorMessage = error;
      });
  }
}

export interface PeriodicElement {
  name: string;
  gender: string;
  created: string;
  species: string;
}
