import { Document } from 'mongoose';
import { ICar } from './CarInterface';

export interface ICustomer extends Document {
	nombre: String;
	apellido: String;
	dni: Number;
	email: String;
	cars: ICar['_id'][];
	tel: Number;
	calle: String;
	nro: Number;
	localidad: String;
}
