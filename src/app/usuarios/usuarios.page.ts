import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../servicios/dataservice.service';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any[] = [];
  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.getUsuarios();   
  }

  getUsuarios() { 
    this.dataService.getUsuarios().subscribe((data) => { 
      this.usuarios = data; }, (error) => 
        { console.error('Error al obtener los usuarios:', error); }); }
}
