import mongoose, { Schema } from 'mongoose';
import { IVehiculo } from '../interfaces/IVehiculoDb';

export default mongoose.model<IVehiculo>(
	'Vehiculos',
	new mongoose.Schema<IVehiculo>(
		{
			patente: {
				type: String,
				required: true
			},
			customer: {
				type: Schema.Types.ObjectId,
				ref: 'Usuarios'
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
			descripcion: {
				type: String
			},
			anio: {
				type: Number
			},
			color: {
				type: String
			},
			kms: Number
		},
		{
			versionKey: false,
			timestamps: true
		}
	)
);
