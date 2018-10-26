'use strict';

import { Router as routerFactory } from 'express';
import jobResults from './getJobResults';

let router = routerFactory(),
    routes;

router.route('/api/jobs')
  .get(jobResults);

routes = (app) => {
  app.use(router);
};
  
export default routes;
