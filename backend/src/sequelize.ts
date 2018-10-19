import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
	dialect: 'postgres',
	operatorsAliases: Sequelize.Op as any,
	host: 'db',
	database: 'short',
	username: 'short',
	password: 'short',
	modelPaths: [__dirname + '/models']
});
