import style from "./Flags.module.scss";

export default function ImportFlag(props: any) {

  const flag = props.content;

  return (
    <div className={style.flag__div}>
      <div className={style.flag} style={{ backgroundImage: `url(${flag})` }}>
      </div>
    </div>
  );
}