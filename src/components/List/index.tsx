import React from "react";
import style from './List.module.scss';
import Item from './Item';
import { ITask } from '../../types/task';

interface Props{
  tasks: ITask[],
  selectTask: (task:ITask)=> void
}
function List({tasks, selectTask}:Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item  selectTask={selectTask} key={item.id} {...item}></Item>
        ))}
      </ul>
    </aside>
  );
}

export default List;
