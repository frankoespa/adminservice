import express, { Router } from 'express';
import { Usuario } from '../models/Usuario';

const router: Router = express.Router();

router.get('/', (req, res, next) => {
	let newCustomer = new Usuario({
		nombre: 'Franco',
		apellido: 'Esparza',
		dni: 37155400,
		email: 'franco'
	});
	newCustomer
		.save()
		.then((customer) => {
			res.json(customer);
		})
		.catch((error) => {
			res.json(error);
		});
});

export default router;
