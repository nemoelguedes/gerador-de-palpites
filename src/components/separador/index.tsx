import style from "./TitleSeparador.module.scss";

export default function TitleSeparador(props : any){

  const content = props.content;

  return(
    <div className={style.title}>
      {content}
    </div>
  );
}