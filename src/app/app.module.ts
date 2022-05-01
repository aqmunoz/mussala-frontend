import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { ListGatewaysComponent } from './components/list-gateways/list-gateways.component';
import { HttpClientModule } from '@angular/common/http';
import { NewGatewayComponent } from './components/new-gateway/new-gateway.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPeripheralsComponent } from './components/view-peripherals/view-peripherals.component';
import { NewPeripheralComponent } from './components/new-peripheral/new-peripheral.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    AppComponent,
    ListGatewaysComponent,
    NewGatewayComponent,
    ViewPeripheralsComponent,
    NewPeripheralComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: MatSnackBar, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
