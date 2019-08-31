import mongoose, { Schema } from 'mongoose';
import { ICar } from '../interfaces/CarInterface';

export default mongoose.model<ICar>(
	'Cars',
	new mongoose.Schema(
		{
			patente: {
				type: String,
				required: true
			},
			customer: {
				type: Schema.Types.ObjectId,
				ref: 'Customers'
			},
			familia: {
				type: String,
				enum: ['Vehículo', 'Camioneta'],
				required: true
			},
			marca: {
				type: String,
				required: true
			},
			modelo: {
				type: String,
				required: true
			},
			desc: {
				type: String
			},
			year: {
				type: Number
			},
			color: {
				type: String
			},
			km: Number
		},
		{
			versionKey: false,
			timestamps: true
		}
	)
);
