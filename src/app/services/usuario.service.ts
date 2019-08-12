import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Credenciales = {};

  constructor() { }

  cargarUsuario(
    nombre: string,
    email: string,
    imagen: string,
    uid: string,

    provider: string) {


      this.usuario.nombre = nombre;
      this.usuario.email = email;
      this.usuario.imagen = imagen;
      this.usuario.uid = uid;
      this.usuario.provider = provider;
    }

}

export interface Credenciales {
  nombre?: string;
  email?: string;
  imagen?: string;
  uid?: string;
  provider?: string;
}
