import { Document } from 'mongoose';
import { IVehiculo } from './IVehiculoDb';

export interface IUsuario extends Document {
	nombre: String;
	apellido: String;
	dni: Number;
	email: String;
	vehiculos: IVehiculo['_id'][];
	telefono: Number;
	calle: String;
	nro: Number;
	localidad: String;
}
