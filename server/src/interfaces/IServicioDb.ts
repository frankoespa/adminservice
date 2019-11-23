import { Document } from 'mongoose';

export interface IServicio extends Document {
	nombre: String;
	precio: Number;
	tipo: String;
}
