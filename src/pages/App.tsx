import React, { useState } from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import { ITask } from '../types/task'

function App() {
  const [tasks,setTasks] = useState<ITask[]>([]);
  const [selected,setSelected] = useState<ITask>()

  function selectTask(task:ITask){
    setSelected(task);
    setTasks(old=>old.map((t)=>({...t,selected: t.id === task.id })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}></Form>
      <List tasks={tasks}
      selectTask={selectTask}></List>
      <Chronometer selected={selected}></Chronometer>
    </div>
  );
}

export default App;
