import style from "./Teamtimeline.module.scss";
import { useState } from "react";

type ITimeline = {
  flag: string,
  title: string,
  score: number,
}

export default function TeamTimeline(props: ITimeline) {

  const flag = props.flag;
  const score = props.score;

  const scoreMin = Math.ceil(1);
  const scoreMax = Math.floor(90);




  return (
    <div className={style.container}>
      <div className={style.divgoals}>
        {[...Array(score)].map((m, index) => {
          index += 1;
          const whatTimeScore = Math.floor(Math.random() * (scoreMax - scoreMin + 1)) + scoreMin;
          const whatSecondAppearing = Math.round(((2000 / 90) * whatTimeScore) + 1000);
          const position = Math.round((96 / 90) * whatTimeScore);
          console.log("score second", whatSecondAppearing);
          console.log("score position", position);
          console.log("score time", whatTimeScore);
          return (<div key={index} className={style.goals} style={{
            left: `${position}%`,
            animationDelay: `${whatSecondAppearing}ms`,
            backgroundImage: `url(${flag})`,
          }} />

          
          );
        })}
      </div>
    </div>
  );
}