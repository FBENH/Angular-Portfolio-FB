
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetInformationService {

  habilidades: any[] = [];
  educacion: any[] = [];
  blog: any[] = [];
  portafolio: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarHabilidades();
    this.CargarEducacion();
    this.CargarBlog();
    this.CargarPortafolio();
   }

  private CargarHabilidades(){
    this.http.get("https://portfolio-federicobentancor-default-rtdb.firebaseio.com/Porfesional.json")
    .subscribe((resp: any) => {
      this.habilidades = resp;      
    });
}
private CargarEducacion(){
  this.http.get("https://portfolio-federicobentancor-default-rtdb.firebaseio.com/Educacion.json")
    .subscribe((resp: any) => {
      this.educacion = resp;      
    });
}
private CargarBlog(){
  this.http.get("https://portfolio-federicobentancor-default-rtdb.firebaseio.com/Blog.json")
    .subscribe((resp: any) => {
      this.blog = resp;      
    });
}

private CargarPortafolio(){
  this.http.get("https://portfolio-federicobentancor-default-rtdb.firebaseio.com/Portfolio.json")
    .subscribe((resp: any) => {
      this.portafolio = resp;      
    });
}
//
}
