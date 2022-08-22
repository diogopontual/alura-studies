import style from "./Clock.module.scss"

interface Props{
  time:number | undefined
}
export default function Clock({time = 0}:Props) {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const [minuteTens,minuteOnes] = String(minutes < 10 ? '0' + minutes : minutes);
  const [secondTens,secondOnes] = String(seconds < 10 ? '0' + seconds : seconds);
  return (
    <>
      <span className={style.relogioNumero}>{minuteTens}</span>
      <span className={style.relogioNumero}>{minuteOnes}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTens}</span>
      <span className={style.relogioNumero}>{secondOnes}</span>
    </>
  );
}
