import style from "./Flags.module.scss";

export default function ImportFlag(props: any) {

  const flag = props.content;

  return (
    <div className={style.flag__div}>
      <img className={style.flag} src={flag} />
    </div>
  );
}