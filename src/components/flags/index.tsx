import style from "./Flags.module.scss";

export default function ImportFlag(props: any) {

  const flag = props.content;

  return (

    <div className={style.flag}>
      <div className={style.flag__image} style={{ backgroundImage: `url(${flag})` }}>
      </div>
    </div>
  );
}