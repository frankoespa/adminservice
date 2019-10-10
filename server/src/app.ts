import express from 'express';
import cors from 'cors';
import customers from './routes/customers';
import services from './routes/services';

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

export default app;
