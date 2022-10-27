import { useEffect, useState } from "react";
import style from "./Score.module.scss";
import TeamTimeline from "./teamTimeline";

const scoreInitial = [0, 0];

type IScore = {
  scoreFirst: number,
  scoreSecond: number,
  flagFirst: string,
  flagSecond: string,
  titleFirst: string,
  titleSecond: string,
  handleGoals: any,
}

export default function Score(props: IScore) {

  const firstTeam = props.scoreFirst;
  const secondTeam = props.scoreSecond;

  const difference = Math.abs(firstTeam - secondTeam);
  const [score, setScore] = useState(scoreInitial);

  useEffect(() => {

    // Se != for entre 0 e 500 pontos = empate ou 1 gol de diferença (0, 1, 2, 3) para qualquer.
    if (difference < 500) {
      const results = [-1, 0];
      scoreGenerator(0, 3, results);
    }

    // Se != for entre 500 e 1000 pontos = 1 ou 2 gols de diferença (1, 2, 3) para time com mais pontos.
    else if (difference >= 500 && difference < 1000) {
      const results = [-2, -1];
      scoreGenerator(1, 3, results);
    }

    // Se != for entre 1000 e 1500 pontos = 2 ou 3 gols de diferença (2, 3, 4) para time com mais pontos.
    else if (difference >= 1000 && difference < 1500) {
      const results = [-3, -2];
      scoreGenerator(2, 4, results);
    }

    // Se != for entre 1500 ou + = 3 ou 4 gols de diferença  (3, 4, 5) para time com mais pontos.
    else if (difference >= 1500) {
      const results = [-4, -3];
      scoreGenerator(3, 5, results);
    }

  }, [firstTeam, secondTeam]);

  useEffect(() => {
    props.handleGoals(score);
  }, [score]);

  function scoreGenerator(min: number, max: number, results: number[]) {
    const scoreMin = Math.ceil(min);
    const scoreMax = Math.floor(max);
    const first = Math.floor(Math.random() * (scoreMax - scoreMin + 1)) + scoreMin;
    const preResults = results.map(m => first + m);
    const goalsFromSecond = Math.abs(Math.floor(Math.random() * results.length));
    const second = Math.abs(preResults[goalsFromSecond]);

    if (firstTeam >= secondTeam) {
      setScore([first, second]);
    } else {
      setScore([second, first]);
    }
  }

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