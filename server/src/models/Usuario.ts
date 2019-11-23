import mongoose, { Schema } from 'mongoose';
import { IUsuario } from '../interfaces/IUsuarioDb';

export const Usuario = mongoose.model<IUsuario>(
	'Usuarios',
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
			vehiculos: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Vehiculos'
				}
			],
			telefono: Number,
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
