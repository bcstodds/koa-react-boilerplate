import Router from 'koa-router';
import DogRoutes from './dogs';
import HealthRoutes from './health';

const router = new Router();

DogRoutes.register(router);
HealthRoutes.register(router);

export { router };
