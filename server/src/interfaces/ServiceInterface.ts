import { Document } from 'mongoose';

export interface IService extends Document {
	nombre: String;
	precio: Number;
	tipo: String;
}
