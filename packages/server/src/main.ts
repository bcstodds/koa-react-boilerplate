import cors from '@koa/cors';
import http from 'http';
import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';
import { appConfig, bodyParserConfig, corsConfig } from './config';
import { router } from './routes/router';

const app = new Koa();

// Apply Middleware
app.use(bodyParser(bodyParserConfig));
app.use(cors(corsConfig));
app.use(logger());

// Apply routes
app.use(router.routes());

const httpServer = http.createServer(app.callback());

const { env, name, version, host, port } = appConfig;

// Serve the build directory.
const staticPages = new Koa();
staticPages.use(serve(`${__dirname}/../../dist/client`));
app.use(mount('/', staticPages));

httpServer.listen({ host, port }, () => {
  // eslint-disable-next-line no-console
  console.info(`${name}@${version} server listening on ${host}:${port}, in ${env}`);
});
