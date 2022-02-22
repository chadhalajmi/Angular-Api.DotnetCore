import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectEntity } from 'src/core/entities/Project';
import { Connexion } from 'src/core/services/Connexion';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  projectForm: FormGroup
  project: any
  constructor(private Cnxservice: Connexion,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    const id=this.route.snapshot.params['id'];
    this.GetOldProject(id);
  }
  GetOldProject(id: string){
    return this.Cnxservice.GetProjectById('Projects/GetById',id).subscribe(res=>{
      this.project=res;
    });
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
    const id=this.route.snapshot.params['id'];
    console.log(id);
    this.project=this.projectForm.value;
    this.Cnxservice.UpdateProject('Projects/PatchProject',id, this.project)
    .subscribe((Response)=>{
      if (Response){
        this.router.navigate(['/ProjectList'])
      }
    })
  }

}
