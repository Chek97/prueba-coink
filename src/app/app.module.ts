import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ROUTES
import { app_routing } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { LoginComponent, MainComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// Services
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
