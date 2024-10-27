import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
  username: string;
  birthDate: string;
  weight: number;
  height: number;
  gender: string;
  fitnessLevel: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  // Método para obtener los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
