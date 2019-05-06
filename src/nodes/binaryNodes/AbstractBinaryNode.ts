import AbstractComparisonOperatorNode from '../AbstractComparisonOperatorNode';

export default abstract class AbstractBinaryOperatorNode extends AbstractComparisonOperatorNode {
	constructor(field: string) {
		super();
		this.field = field;
	}
}
