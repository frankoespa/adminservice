import mongoose from 'mongoose';
import { IService } from '../interfaces/ServiceInterface';

export default mongoose.model<IService>(
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
