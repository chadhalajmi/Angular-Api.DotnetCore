import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectAddComponent } from '../project-add/project-add.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Projects', icon: 'pi pi-users', routerLink: 'ProjectList'},
          {label: 'Add Project', icon: 'pi pi-user-plus', routerLink: 'ProjectAdd'},
      ];
  }

}
