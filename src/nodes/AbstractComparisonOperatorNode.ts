import AbstractQueryNode from './AbstractQueryNode';

export default abstract class AbstractComparisonOperatorNode extends AbstractQueryNode {
	field: string;
}
