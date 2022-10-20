import style from "./TeamTitle.module.scss";

export default function TeamTitle(props: any) {

  const title = props.title;

  return (
    <div className={style.team__title}>
      {title}
    </div>
  );
}