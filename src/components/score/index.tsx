import { useEffect, useState } from "react";
import style from "./Score.module.scss";
import TeamTimeline from "./teamTimeline";

type IScore = {
  score: number[],
  flagFirst: string,
  flagSecond: string,
  titleFirst: string,
  titleSecond: string,
}

export default function Score(props: IScore) {

  const score = props.score;

  return (
    <section className={style.section}>
      <TeamTimeline flag={props.flagFirst} title={props.titleFirst} score={score[0]} />
      <div className={style.timeline__div}>
        <div className={style.timeline__line}>
        </div>
      </div>
      <div className={style.time}>
        <div className={style.time__start}>0</div>
        <div className={style.time__half}>15</div>
        <div className={style.time__half}>30</div>
        <div className={style.time__half}>45</div>
        <div className={style.time__half}>60</div>
        <div className={style.time__half}>75</div>
        <div className={style.time__end}>90</div>
      </div>


      <TeamTimeline flag={props.flagSecond} title={props.titleSecond} score={score[1]} />
    </section>


  );
}