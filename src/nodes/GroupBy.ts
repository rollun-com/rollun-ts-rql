import AbstractNode from './AbstractNode';

export default class GroupBy extends AbstractNode {
	readonly fields: any[];

	constructor(fields: any[]) {
		super();
		this.fields = fields;
	}
}
