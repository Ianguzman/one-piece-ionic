import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';  // Asegúrate de importar Auth
import { createUserWithEmailAndPassword } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) {}

  /*// Login con email y contraseña
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }*/

  // Registro con email y contraseña
  register({email, password}: any ) {
    return createUserWithEmailAndPassword(this.auth,email, password);
  }

  // Cerrar sesión
  logout() {
    return this.auth.signOut();
  }
}
