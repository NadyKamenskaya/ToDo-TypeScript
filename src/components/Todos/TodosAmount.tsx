import { ToDosState } from '../../types';

const TodosAmount = (state: ToDosState) => (
  <span className="amount">
    {state.todos.length}
  </span>
);

export default TodosAmount;
