import mongoose from 'mongoose';
import { IServicio } from '../interfaces/IServicioDb';

export const Servicio = mongoose.model<IServicio>(
	'Services',
	new mongoose.Schema(
		{
			nombre: {
				type: String,
				required: true,
				trim: true
			},
			precio: Number,
			tipo: {
				type: String,
				enum: ['MANOB', 'ESPECIAL'],
				required: true
			}
		},
		{
			versionKey: false,
			timestamps: true
		}
	)
);
