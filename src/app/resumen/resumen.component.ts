import { Component, OnInit } from '@angular/core';
import { GetInformationService } from '../services/get-information.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: GetInformationService) { }

  ngOnInit(): void {
  }

}
