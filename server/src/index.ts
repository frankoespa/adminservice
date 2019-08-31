import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import customers from './routes/customers';
import services from './routes/services';

dotenv.config();

const PORT = process.env.PORT || 4000;
mongoose
	.connect(`${process.env.DB}`, { useNewUrlParser: true })
	.then(() => {
		console.log('Conectado a la BD');
	})
	.catch((error) => {});

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/customers', customers);
app.use('/api/services', services);

app.get('*', (req, res, next) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
