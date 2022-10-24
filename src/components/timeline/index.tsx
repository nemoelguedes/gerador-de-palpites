import classNames from "classnames";
import style from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <>
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
    </>
  );
}