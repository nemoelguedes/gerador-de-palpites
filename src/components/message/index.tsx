import style from "./Message.module.scss";

export default function Message(props : any){

  const mensagem = props.mensagem;

  return(
    <section className={style.messageDiv}>
      <div className={style.messageWarning}>
        {mensagem}
      </div>
    </section>
  );
}