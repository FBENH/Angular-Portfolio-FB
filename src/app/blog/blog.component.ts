import { Component } from '@angular/core';
import { GetInformationService } from '../services/get-information.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  constructor(public cv:GetInformationService) { }
}
