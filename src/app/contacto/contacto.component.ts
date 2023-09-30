import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      mail: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  Submit() {
    if (this.contactForm) {
      let nombre = this.contactForm.get('nombre').value;
      let mail = this.contactForm.get('mail').value;
      let mensaje = this.contactForm.get('mensaje').value;
      
      const mailTo= `mailto:${"federicob1399@gmail.com"}?subject=Contacto de ${nombre}&body=${mensaje}`;
      window.open(mailTo);

      nombre= '';
      mail= '';
      mensaje= '';
    }    
  } 
}
