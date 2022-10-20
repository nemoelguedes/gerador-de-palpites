import classNames from "classnames";
import ImportFlag from "components/flags";
import Placar from "components/placar";
import Ranking from "components/ranking";
import TitleSeparador from "components/separador";
import { useEffect, useState } from "react";
import style from "./Results.module.scss";

// TEAM [TEAM, CHAMPIONSHIPS, RANK, RANKPOINTS, FLAG, ID, ATTACK, DEFENSE]

type IResults = {
  firstTeam: [string, number, number, number, string, string, number, number],
  secondTeam: [string, number, number, number, string, string, number, number],
}

const initialPoints = 0;
const pointsChampionships = [1000, 1400, 1500, 1600, 1700, 1800];
const pointsAttackDefense = [0, 100, 200, 300, 400, 500];

export default function Results(props: IResults) {

  const firstTeam = props.firstTeam;
  const secondTeam = props.secondTeam;

  const [pointsFirstTeam, setPointsFirstTeam] = useState(initialPoints);
  const [pointsSecondTeam, setPointsSecondTeam] = useState(initialPoints);





  console.log("eita", pointsChampionships[firstTeam[1]], firstTeam[3], pointsAttackDefense[firstTeam[6]], pointsAttackDefense[firstTeam[7]]);
  console.log("eita2", pointsChampionships[secondTeam[1]], secondTeam[3], pointsAttackDefense[secondTeam[6]], pointsAttackDefense[secondTeam[7]]);
  console.log("eita2", pointsFirstTeam, pointsSecondTeam);

  useEffect(() => {
    setPointsFirstTeam(pointsChampionships[firstTeam[1]] + firstTeam[3] + pointsAttackDefense[firstTeam[6]] + pointsAttackDefense[firstTeam[7]]);
    setPointsSecondTeam(pointsChampionships[secondTeam[1]] + secondTeam[3] + pointsAttackDefense[secondTeam[6]] + pointsAttackDefense[secondTeam[7]]);

  }, [firstTeam]);


  return (

    <section className={classNames({
      [style.container]: true,
      // [listSelectedTeams.length != 2 ? style.hidden : ""]: true,
    })}>

      <div className={style.team__container}>
        <div className={style.team__content}>
          <Ranking ranking={pointsFirstTeam} info={" Pontos"} />
          <TitleSeparador content={"Pontuação"}/>
          <Ranking ranking={pointsSecondTeam} info={" Pontos"} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>

      <div>
        <Placar pointsfirst={pointsFirstTeam} pointssecond={pointsSecondTeam} />
      </div>



    </section>
  );
}