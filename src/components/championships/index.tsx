import style from "./Championships.module.scss";
import { FaTrophy } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export default function Championships(props: any) {

  const championships = props.championships;

  return (
    <div className={style.team__data}  key={uuidv4()} >
      {championships == 0
        ? <FaTrophy className={style["team__icon--inactive"]} />
        // : Array(championships).fill(<div key={uuidv4()} ><FaTrophy className={style.team__icon} /></div>)}
        : [...Array(championships)].map((m, index) => {
          index += 1;
          return (
            <FaTrophy key={index} className={style.team__icon} />

          );
        })}
    </div>

  );
}