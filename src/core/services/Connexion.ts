import { ProjectEntity } from './../entities/Project';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Connexion {

  constructor(private httpClient : HttpClient){}

  AddProject(endPoint: string, data: any){
    return this.httpClient.post(`${environment.Host}${environment.Url}${endPoint}`, data);
  }
  DeleteProject(endPoint: string, id: string){
    return this.httpClient.delete(`${environment.Host}${environment.Url}${endPoint}/${id}`);
  }
  GetProjectById(endPoint: string, id: string){
    return this.httpClient.get(`${environment.Host}${environment.Url}${endPoint}/${id}`);
  }
  getAllProjects(endPoint: string): Observable<any>{
    return this.httpClient.get(`${environment.Host}${environment.Url}${endPoint}`);
  }
  UpdateProject(endPoint: string, id: string, data: any){
    return this.httpClient.patch(`${environment.Host}${environment.Url}${endPoint}/${id}`,
      data
    );
  }
}
