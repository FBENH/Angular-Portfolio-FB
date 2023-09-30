import { Component } from '@angular/core';
import { GetInformationService } from '../services/get-information.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  constructor(public cv:GetInformationService){}
  


}
