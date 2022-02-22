import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabMenuModule} from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { MenuComponent } from './menu/menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectListComponent,
    ProjectAddComponent,
    ProjectUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabMenuModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
