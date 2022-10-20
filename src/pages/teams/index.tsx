import style from "../teams/Teams.module.scss";
import dataTeams from "../../data/teams.json";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Rating from "../../components/rating";
import ImportFlag from "../../components/flags";
import TitleSeparador from "../../components/separador";
import TeamTitle from "components/teamTitle";
import Championships from "components/championships";
import Ranking from "components/ranking";
import Message from "components/message";
import Results from "pages/results";

type Iteam = [string, number, number, number, string, string];
type ITeams = { selected: string[] };

export default function Teams(props: ITeams) {

  // FILTER AN MAP ON SELECTED TEAMS
  const listSelectedTeams = props.selected;
  const dataFirstTeam = dataTeams.filter(team => listSelectedTeams[0] == team.id);
  const firstTeam = dataFirstTeam.map(m => [m.teams, m.championships, m.ranking, m.rankpoints, m.flag, m.id]).flat() as Iteam;
  const dataSecondTeam = dataTeams.filter(team => listSelectedTeams[1] == team.id);
  const secondTeam = dataSecondTeam.map(m => [m.teams, m.championships, m.ranking, m.rankpoints, m.flag, m.id]).flat() as Iteam;



  // // DATA TO GENERATE RESULTS
  const [firstAttackRating, setfirstAttackRating] = useState(0);
  const [secondAttackRating, setSecondAttackRating] = useState(0);
  const [firstDefenseRating, setFirstDefenseRating] = useState(0);
  const [secondDefenseRating, setSecondDefenseRating] = useState(0);



  const updateFirstAttackRating = (r: number) => { setfirstAttackRating(r); };
  const updateSecondAttackRating = (r: number) => { setSecondAttackRating(r); };
  const updateFirstDefenseRating = (r: number) => { setFirstDefenseRating(r); };
  const updateSecondDefenseRating = (r: number) => { setSecondDefenseRating(r); };

  console.log("renderizou teams", firstAttackRating);

  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    if (firstAttackRating !== 0
      && firstDefenseRating !== 0
      && secondAttackRating !== 0
      && secondDefenseRating !== 0
      && allSelected == false) {
      setAllSelected(true);
    }
  }, [firstAttackRating, secondAttackRating, firstDefenseRating, secondDefenseRating]);


  if (listSelectedTeams.length == 0 && allSelected == true) {
    setAllSelected(false);
  }

  const [resultsScreen, setResultsScreen] = useState(false);

  function gerarPalpite() {
    setResultsScreen(true);
  }


  return (

    <section className={classNames({
      [style.container]: true,
      [listSelectedTeams.length != 2 ? style.hidden : ""]: true,
    })}>


      {/* BANDEIRA */}
      <div className={style.team__background}>
        <ImportFlag content={firstTeam[4]} />
        <TitleSeparador content={""} />
        <ImportFlag content={secondTeam[4]} />
      </div>

      {/* NOME DA SELEÇÃO */}

      <div className={classNames({
        [style.team__container]: true,
        [style.background__secondColor]: true,
      })}>
        <hr className={style.hrHeader}></hr>
        <div className={style.team__content}>
          <TeamTitle title={firstTeam[0]} />
          <TitleSeparador content={<img src="assets/vs.png" ></img>} />
          <TeamTitle title={secondTeam[0]} />
        </div>
      </div>


      {/* TÍTULOS */}
      <div className={classNames({
        [style.team__container]: true,
        [style.hidden]: resultsScreen,
      })}>
        <div className={style.team__content}>
          <Championships championships={firstTeam[1]} />
          <TitleSeparador content={"Títulos"} />
          <Championships championships={secondTeam[1]} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>


      {/* RANKING */}
      <div className={classNames({
        [style.team__container]: true,
        [style.hidden]: resultsScreen,
      })}>
        <div className={style.team__content}>
          <Ranking ranking={firstTeam[2]} info={"º Colocado"} />
          <TitleSeparador content={"Ranking Fifa"} />
          <Ranking ranking={secondTeam[2]} info={"º Colocado"} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>

      {allSelected == true || resultsScreen == true ? "" : <Message mensagem={"Informe a qualidade do Ataque e Defesa das Seleções:"} />}

      {/* ATAQUE */}
      <div className={classNames({
        [style.team__container]: true,
        [style.hidden]: resultsScreen,
      })}>
        <div className={style.team__content}>
          <Rating handleRating={updateFirstAttackRating} content={listSelectedTeams} />
          <TitleSeparador content={"Ataque"} />
          <Rating handleRating={updateSecondAttackRating} content={listSelectedTeams} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>

      {/* DEFENSE */}
      <div className={classNames({
        [style.team__container]: true,
        [style.hidden]: resultsScreen,
      })}>
        <div className={style.team__content}>
          <Rating handleRating={updateFirstDefenseRating} content={listSelectedTeams} />
          <TitleSeparador content={"Defesa"} />
          <Rating handleRating={updateSecondDefenseRating} content={listSelectedTeams} />
        </div>
        <hr className={style.team__separador}></hr>
      </div>


      <div className={classNames({
        [style.team__container]: true,
        [style.hidden]: resultsScreen,
      })}>
        
        <button className={style.button} onClick={gerarPalpite} >Gerar Palpite</button>

      </div>

      {/* // TEAM [TEAM, CHAMPIONSHIPS, RANK, RANKPOINTS, FLAG, ID, ATTACK, DEFENSE] */}
      <div className={classNames({
        [style.hidden]: !resultsScreen,
      })}>

        <Results firstTeam={[firstTeam[0], firstTeam[1], firstTeam[2], firstTeam[3], firstTeam[4], firstTeam[5], firstAttackRating, firstDefenseRating]} secondTeam={[secondTeam[0], secondTeam[1], secondTeam[2], secondTeam[3], secondTeam[4], secondTeam[5], secondAttackRating, secondDefenseRating]} />
      </div>
    </section >
  );
}
