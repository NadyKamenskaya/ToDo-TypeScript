import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { BsTrash3 } from 'react-icons/bs';

import { ToDo } from '../../types';

import { removeTodo, changeStatus } from '../../slices/todosSlice';

const ButtonsList = (values: { item: ToDo }) => {
  const { id, body, status } = values.item;
  const dispatch = useDispatch();

  const handleRemove = (idTodo: number) => () => {
    dispatch(removeTodo({ id: idTodo }));
  };

  const changeState = (idTodo: number, statusTodo: string) => () => {
    dispatch(changeStatus({ id: idTodo, status: statusTodo }));
  };

  return (
    <>
      <Button
        className="todo-body border-0"
        variant="group-vertical"
        type="button"
        onClick={changeState(id, status)}
      >
        {body}
      </Button>
      <Button
        className="border-0"
        variant="group-vertical"
        type="button"
        onClick={handleRemove(id)}
      >
        <BsTrash3 className="icon-trash ms-auto" />
      </Button>
    </>
  );
};

export default ButtonsList;
