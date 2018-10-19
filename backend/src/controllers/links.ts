import {Context} from 'koa';
import * as randomstring from 'randomstring';

import Link from '../models/link';
import config from '../config';

export const create = async (ctx: Context) => {
	if (!ctx.request.body) {
		ctx.status = 400;
		return;
	}

	const body: any = ctx.request.body;

	if (!body.secret) {
		ctx.status = 403;
		return;
	}

	if (body.secret !== config.secret) {
		ctx.status = 403;
		ctx.body = 'invalid token';
		return;
	}

	if (!body.target) {
		ctx.status = 400;
		return;
	}

	if (!body.slug) {
		body.slug = randomstring.generate(10);
	}

	try {
		const link = await Link.create(body);
		ctx.body = await link.toJSON();
	} catch (e) {
		if (e.errors) {
			ctx.status = 400;
			ctx.body = e.errors;
		} else {
			ctx.status = 500;
		}
	}
};

export const use = async (ctx: Context) => {
	if (!ctx.params.link) {
		ctx.status = 400;
		return;
	}

	const link = await Link.findOne({where: {slug: ctx.params.link.toLowerCase()}});

	if (!link) {
		ctx.status = 404;
		return;
	}

	ctx.redirect(link.target);
};
