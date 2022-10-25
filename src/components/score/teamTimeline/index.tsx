import style from "./Teamtimeline.module.scss";
import {BiFootball} from "react-icons/bi";
import { useState } from "react";

type ITimeline = {
  flag: string,
  title: string,
  score: number,
}

type IGoals = number[]

export default function TeamTimeline(props : ITimeline){

  const flag = props.flag;
  const score = props.score;

  const [time, setTime] = useState([] as IGoals);

  const scoreMin = Math.ceil(1);
  const scoreMax = Math.floor(90);




  return(
    <div className={style.container}>
      <div className={style.flag}  style={{ backgroundImage: `url(${flag})` }}>
      </div>
      <div className={style.divgoals}>
        {[...Array(score)].map((m, index) => {
          index += 1;
          const whatTimeScore = Math.floor(Math.random() * (scoreMax - scoreMin + 1)) + scoreMin;
          console.log("score time", whatTimeScore);
          return (
            <BiFootball key={index} className={style.goals} style={{left: `calc(100% / 90 * ${whatTimeScore})`}}/>
          );})}
      </div>    
    </div>
  );
}