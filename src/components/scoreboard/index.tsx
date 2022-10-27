import style from "./Scoreboard.module.scss";

type IScore = {
  score: number;
}

export default function ScoreBoard(props: IScore){

  return(
    <div className={style.scoreBoard}>
      {props.score}
    </div>
  );
}