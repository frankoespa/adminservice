import express, { Router } from 'express';
import Service from '../models/Service';

const router: Router = express.Router();

router.get('/', (req, res, next) => {
	/* let newService = new Service({
		nombre: 'Limpieza de inyectores',
		precio: 1200,
		tipo: 'ESPECIAL'
	});

	newService
		.save()
		.then((service) => {
			res.json(service);
		})
		.catch((error) => {
			res.json({ error });
        }); */
	Service.find().then((services) => {
		res.status(200).json({ services });
	});
});

export default router;
