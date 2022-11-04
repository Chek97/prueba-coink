import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faUserCircle, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
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

  search(valor: string){
    this._dataService.getCharacterByName(valor)
      .subscribe((resp: any) => {
        this.dataSource = resp.results;
      });
  }
}

export interface PeriodicElement {
  name: string;
  gender: string;
  created: string;
  species: string;
}
