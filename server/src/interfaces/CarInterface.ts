import { Document } from 'mongoose';
import { ICustomer } from './CustomerInterface';

export interface ICar extends Document {
	patente: String;
	customer: ICustomer['_id'];
	familia: String;
	marca: String;
	modelo: String;
	desc: String;
	year: Number;
	color: String;
	km: Number;
}
