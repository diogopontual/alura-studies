import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/time";

interface Props{
    selected: ITask | undefined
}
export default function Chronometer({selected}:Props){
    const [time,setTime] = useState<number>();
    
    function countdown(seconds: number = 0){
        setTimeout(()=>{
            if(seconds > 0){
                const v = seconds - 1;
                setTime(v);
                return(countdown(v));

            }
        },1000);
    }
    useEffect(()=>{
        if(selected?.time)
            setTime(timeToSeconds(String(selected?.time)))
    },[selected])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}></Clock>
            </div>
            <Button onClick={()=>{countdown(time)}}>Começar</Button>
        </div>
    );
}