import express, { Router } from 'express';
import { Servicio } from '../models/Servicio';

const router: Router = express.Router();

router.get('/', (req, res, next) => {
	/* let newService = new Servicio({
		nombre: 'Limpieza de inyectores',
		precio: 1200
	});

	newService
		.save()
		.then((service) => {
			res.json(service);
		})
		.catch((error) => {
			res.json({ error });
        }); */
	Servicio.find().then((services) => {
		res.status(200).json({ services });
	});
});

export default router;
