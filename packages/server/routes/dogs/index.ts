import Router from 'koa-router';

const register = (router: Router) => {
  router.get('/dogs', async (ctx) => {
    ctx.status = 200;
    ctx.body = [
      { name: 'Butler', breed: 'Corgi', score: '10/10' },
      { name: 'Chico', breed: 'Chihuahua', score: '10/10' },
      { name: 'Ramona', breed: 'Shepard Mix', score: '1000/10' },
    ];
  });
};

export default { register };
