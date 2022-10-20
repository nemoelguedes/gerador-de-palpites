import Header from "../components/header";
import Teams from "pages/teams";
import { useState } from "react";
import dataTeams from "../data/teams.json";
import style from "./App.module.scss";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import Message from "components/message";
import { RiCloseCircleFill } from "react-icons/ri";

const inicialSelectedTeams = [] as string[];

export default function App() {

  const [selectedTeams, setSelectedTeams] = useState(inicialSelectedTeams);

  console.log("renderizou App");

  function onSelect(id: string) {
    if (selectedTeams.includes(id) == true) {
      setSelectedTeams([]);
    }
    else if (selectedTeams.length < 2) {
      setSelectedTeams([...selectedTeams, id]);
    }
  }

  function resetTeams() {
    setSelectedTeams(inicialSelectedTeams);
  }

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* RESET */}
      {selectedTeams.length !== 2 ? ""
        : <div className={style.iconCloseDiv}>
          <RiCloseCircleFill className={style.iconClose} onClick={() => resetTeams()} />
        </div>}

      {/* SELECTION MESSAGE */}
      {selectedTeams.length == 2 ? "" : <Message mensagem={"escolha 2 seleções para começar:"} />}

      {/* TEAM SELECT */}
      <section className={classNames({
        [style.sectionSelect]: true,
        [selectedTeams.length != 2 ? "" : style.hidden]: true,
      })}>

        <div className={style.selectOptions}>

          {dataTeams.map((team, index) => (
            <button id={team.id} key={uuidv4()}
              className={style.button}
              onClick={(e) => onSelect(team.id)}>

              <div className={classNames({
                [style.selectTeam]: true,
                [selectedTeams.includes(team.id) ? style["selectTeam--active"] : ""]: true,
              })} style={{ backgroundImage: `url(${team.flag})` }}></div>

              <div className={style.title}>
                {team.teams}
              </div>
            </button>
          ))}
        </div>
      </section >

      {/* TEAMS */}
      <Teams selected={selectedTeams} />
    </>
  );
}
