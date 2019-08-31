import mongoose, { Schema } from 'mongoose';
import { ICustomer } from '../interfaces/CustomerInterface';

export default mongoose.model<ICustomer>(
	'Customers',
	new mongoose.Schema(
		{
			nombre: {
				type: String,
				maxlength: 30,
				trim: true,
				required: true
			},
			apellido: {
				type: String,
				maxlength: 30,
				trim: true,
				required: true
			},
			dni: {
				type: Number,
				maxlength: 15,
				required: true
			},
			email: {
				type: String,
				match: [
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,
					'Invalid email'
				],
				trim: true,
				required: true
			},
			cars: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Cars'
				}
			],
			tel: Number,
			calle: {
				type: String,
				trim: true
			},
			nro: Number,
			localidad: {
				type: String,
				trim: true
			}
		},
		{
			versionKey: false,
			timestamps: true
		}
	)
);
