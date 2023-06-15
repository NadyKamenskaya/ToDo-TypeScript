import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Status, ToDo } from '../../types';

import { selectAllTodos } from '../../slices/todosSlice';

import TodosList from './TodosList';
import TodosAmount from './TodosAmount';

const TodosTabs: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  const allTodos = useSelector(selectAllTodos);
  const arrayTodos = Object.values(allTodos.entities)
    .filter((todo) => todo !== undefined) as ToDo[];
  const doneTodos = arrayTodos
    .filter((todo) => todo.status === Status.DONE);
  const notDoneTodos = arrayTodos
    .filter((todo) => todo.status === Status.NOT_DONE);

  return (
    <Tabs
      defaultActiveKey="all"
      transition={false}
      id="fill-tab-example"
      className="bg-dark mb-3"
      justify
    >
      <Tab eventKey="all" title={t('tabs.allTodos')}>
        <div className="amount-container all">
          <TodosAmount todos={arrayTodos} />
        </div>
        <TodosList todos={arrayTodos} />
      </Tab>
      <Tab eventKey="done" title={t('tabs.done')}>
        <div className="amount-container done">
          <TodosAmount todos={doneTodos} />
        </div>
        <TodosList todos={doneTodos} />
      </Tab>
      <Tab eventKey="notDone" title={t('tabs.notDone')}>
        <div className="amount-container not-done">
          <TodosAmount todos={notDoneTodos} />
        </div>
        <TodosList todos={notDoneTodos} />
      </Tab>
    </Tabs>
  );
};

export default TodosTabs;
