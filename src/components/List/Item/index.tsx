import { ITask } from "../../../types/task";
import style from "../List.module.scss";
interface Props extends ITask{
    selectTask: (task:ITask)=>void
}
export default function Item({ task, time, selected, completed, id, selectTask }: Props) {

  return (
    <li onClick={()=>selectTask({task, time, selected, completed, id})} className={`${style.item} ${selected ? style.itemSelecionado : ''}`}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
