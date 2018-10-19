import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import config from './config';

import {sequelize} from './sequelize';
import {create, use} from './controllers/links';

const app = new Koa();
const router = new Router();

router.post('/create', create);
router.get('/:link', use);

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

(async () => {
    await sequelize.sync({force: true});
    await app.listen(config.port);
    console.log(`Live on port ${config.port}!`);
})();
