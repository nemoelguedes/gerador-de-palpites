import style from "./Ranking.module.scss";

export default function Ranking(props: any) {

  const ranking = props.ranking;

  return (
    <div className={style.team__data}>
      {ranking}{props.info}
    </div>
  );
}