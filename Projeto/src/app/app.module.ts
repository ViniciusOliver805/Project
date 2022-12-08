import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CardBarchartComponent } from './card-barchart/card-barchart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { CardPolarchartComponent } from './card-polarchart/card-polarchart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { CardRadarchartComponent } from './card-radarchart/card-radarchart.component';
import { BarralateralComponent } from './barralateral/barralateral.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    CardBarchartComponent,
    PolarChartComponent,
    CardPolarchartComponent,
    RadarChartComponent,
    CardRadarchartComponent,
    BarralateralComponent
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
