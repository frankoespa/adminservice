import express from 'express';
import cors from 'cors';
import clientes from './routes/clientes';
import servicios from './routes/servicios';

export const App = express();

//Middlewares
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

//Routes
App.use('/api/clientes', clientes);
App.use('/api/servicios', servicios);

App.get('*', (req, res, next) => {
	res.sendStatus(404);
});
