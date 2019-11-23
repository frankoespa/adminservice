import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { App } from './app';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function main() {
	await mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true });
	console.log('Conectado a la BD');
	App.listen(PORT, () => {
		console.log(`Servidor corriendo en el puerto: ${PORT}`);
	});
}

main();
