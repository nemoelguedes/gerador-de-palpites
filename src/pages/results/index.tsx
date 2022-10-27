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

  const difference = Math.abs(pointsTeams[0] - pointsTeams[1]);
  const [score, setScore] = useState(initialPoints);

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

    <section className={style.container}>

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
          <ScoreBoard score={score[0]} />
          <TitleSeparador content={<img src="assets/vs.png" ></img>} />
          <ScoreBoard score={score[1]} />
          <TeamTitle title={secondTeam[0]} width={23} />
        </div>
      </div>



      <div className={style.team__container}>
        <div>
          <Score score={score} flagFirst={firstTeam[4]} flagSecond={secondTeam[4]} titleFirst={firstTeam[0]} titleSecond={secondTeam[0]}/>
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