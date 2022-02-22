import { ProjectEntity } from './../../core/entities/Project';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Connexion } from '../../core/services/Connexion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectForm: FormGroup
  project: ProjectEntity
  constructor(private Cnxservice: Connexion,
    private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.projectForm=this.formBuilder.group({
         Title: ['', Validators.required],
         Description :['', Validators.required],
         StartDate: ['', Validators.required],
         EndDate :['', Validators.required],
    });
  }
  onSubmit(){
    this.project=this.projectForm.value;
    this.Cnxservice.AddProject('Projects/Post', this.project)
    .subscribe((Response)=>{
      if (Response){
        this.router.navigate(['/ProjectList'])
      }
    })
  }
}
