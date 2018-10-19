import {Column, Model, Table, BeforeUpdate, BeforeCreate} from 'sequelize-typescript';

@Table
export default class Link extends Model<Link> {
	@Column({unique: true, allowNull: false})
	public slug!: string;

	@Column({allowNull: false})
	public target!: string;

	@BeforeUpdate
	@BeforeCreate
	static makeUpperCase(instance: Link) {
		instance.slug = instance.slug.toLowerCase();
	}  
}
