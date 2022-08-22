import React from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}>{
    state = {
        task: "",       
        time: "00:00:00",
        selected: false,
        completed: false
    }
    addTask(e:React.FormEvent){
        e.preventDefault();
        this.props.setTasks(old => [...old,{...this.state, selected: false, completed: false, id: uuidv4()}]);
        this.setState({
            task: "",       
            time: "00:00:00",
            selected: false,    
            completed: false            
        });
    }
    render(){
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input type="text" value={this.state.task} onChange={(e)=>{this.setState({...this.state, task:e.target.value})}} name="task" id="task" placeholder="O que vc quer estudar?"/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>Tempo</label>
                    <input type="time"  value={this.state.time} onChange={(e)=>{this.setState({...this.state,time:e.target.value})}} step="1" name="time" id="time" min="00:00:00" max="01:30:00" required/>
                </div>  
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}

export default Form;