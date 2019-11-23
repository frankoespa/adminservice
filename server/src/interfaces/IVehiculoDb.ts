import { Document } from 'mongoose';
import { IUsuario } from './IUsuarioDb';

export interface IVehiculo extends Document {
	patente: String;
	customer: IUsuario['_id'];
	familia: String;
	marca: String;
	modelo: String;
	descripcion: String;
	anio: Number;
	color: String;
	kms: Number;
}
