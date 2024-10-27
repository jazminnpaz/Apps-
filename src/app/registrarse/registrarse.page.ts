import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../servicios/dataservice.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private servicio:DataserviceService) { }

  ngOnInit() {
    
  }

}
