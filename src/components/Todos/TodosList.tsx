import { ListGroup } from 'react-bootstrap';

import { GiCheckMark } from 'react-icons/gi';

import cn from 'classnames';

import { ToDosState, Status } from '../../types';

import ButtonsList from './ButtonsList';

const TodosList = (state: ToDosState) => {
  const hiddenClass = (status: string) => ({
    'd-none': status === Status.NOT_DONE,
  });

  return (
    <ListGroup
      as="ul"
      variant="flush"
    >
      {state.todos.map((todo) => (
        <ListGroup.Item
          as="li"
          key={todo.id}
          className="align-items-center border-0 bg-dark d-flex"
        >
          {(todo.status === Status.NOT_DONE)
            ? <div className="check" />
            : (
              <GiCheckMark
                className={cn(hiddenClass(todo.status), { 'icon-check': true })}
              />
            )}
          <ButtonsList item={todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodosList;
