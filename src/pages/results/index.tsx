import classNames from "classnames";
import ImportFlag from "components/flags";
import Ranking from "components/ranking";
import Score from "components/score";
import ScoreBoard from "components/scoreboard";

import TitleSeparador from "components/separador";
import TeamTitle from "components/teamTitle";
import { useEffect, useState } from "react";
import style from "./Results.module.scss";

// TEAM [TEAM, CHAMPIONSHIPS, RANK, RANKPOINTS, FLAG, ID, ATTACK, DEFENSE]

type IResults = {
  firstTeam: [string, number, number, number, string, string, number, number],
  secondTeam: [string, number, number, number, string, string, number, number],
}

const initialPoints = [0, 0];
const pointsChampionships = [1000, 1400, 1500, 1600, 1700, 1800];
const pointsAttackDefense = [0, 200, 400, 600, 800, 1000];

export default function Results(props: IResults) {

  const firstTeam = props.firstTeam;
  const secondTeam = props.secondTeam;

  const [pointsTeams, setPointsTeams] = useState(initialPoints);

  useEffect(() => {

    setPointsTeams([pointsChampionships[firstTeam[1]] + firstTeam[3] + pointsAttackDefense[firstTeam[6]] + pointsAttackDefense[firstTeam[7]], pointsChampionships[secondTeam[1]] + secondTeam[3] + pointsAttackDefense[secondTeam[6]] + pointsAttackDefense[secondTeam[7]]]);

  }, [firstTeam, secondTeam]);

  const [finalScore, setFinalScore] = useState([]);

  const updateGoals = (m: any) => {
    setFinalScore(m);
  };

  console.log("esse aqui ó de certeza", finalScore);

  return (

    <section className={classNames({
      [style.container]: true,
      // [listSelectedTeams.length != 2 ? style.hidden : ""]: true,
    })}>

      {/* BANDEIRA */}
      <div className={style.team__container}>
        <div className={style.team__content}>
          <ImportFlag content={firstTeam[4]} />
          <TitleSeparador content={""} />
          <ImportFlag content={secondTeam[4]} />
        </div>
      </div>


      {/* NOME DA SELEÇÃO */}
      <div className={style.team__container}>
        <div className={style.team__content}>
          <TeamTitle title={firstTeam[0]} width={23} />
          <ScoreBoard score={finalScore[0]} />
          <TitleSeparador content={<img src="assets/vs.png" ></img>} />
          <ScoreBoard score={finalScore[1]} />
          <TeamTitle title={secondTeam[0]} width={23} />
        </div>
      </div>



      <div className={style.team__container}>
        <div>
          <Score scoreFirst={pointsTeams[0]} scoreSecond={pointsTeams[1]} flagFirst={firstTeam[4]} flagSecond={secondTeam[4]} titleFirst={firstTeam[0]} titleSecond={secondTeam[0]} handleGoals={updateGoals} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>

      <div className={style.team__container}>
        <div className={style.team__content}>
          <Ranking ranking={pointsTeams[0]} info={" Pontos"} />
          <TitleSeparador content={"Pontuação"} />
          <Ranking ranking={pointsTeams[1]} info={" Pontos"} />
        </div>
      </div>



    </section>
  );
}