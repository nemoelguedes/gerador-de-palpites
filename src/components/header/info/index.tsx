import rules from "../../../data/rules.json";
import style from "./Modal.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Modal(){
  return(
    <span className={style.modal__container}>
      <h3 className={style.modal__title}>O que é considerado na geração do palpite?</h3>
      <hr></hr>
      <div>{rules.map((team) => (<li className={style.modal__li} key={uuidv4()}>{team.content}</li>))}
      </div>
    </span>
  );
}