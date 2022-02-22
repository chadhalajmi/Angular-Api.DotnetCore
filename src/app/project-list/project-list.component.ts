import { Component, OnInit } from '@angular/core';
import { Connexion } from 'src/core/services/Connexion';
import { ProjectEntity } from '../../core/entities/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
projects: ProjectEntity[]
  constructor(private Cnxservice: Connexion, private router:Router) {
  }

  ngOnInit(): void {
    console.log("aaa");
    this.getProjects();
  }
  public getProjects() {
    this.Cnxservice.getAllProjects('Projects/List')
    .subscribe(res=>{
      this.projects=res
      console.log(this.projects);
    });
  }
  onDelete(id: string){
    console.log(id);
    this.Cnxservice.DeleteProject('Projects/DeleteProject',id)
    .subscribe(result=>{this.getProjects()},
    error=>{console.log(error)});
  }
  onModify(id:string){
    this.router.navigate(['/ProjectUpdate',id]);
  }

}
