import style from "./TeamTitle.module.scss";

type ITitle = {
  title: string,
  width: number,
}

export default function TeamTitle(props: ITitle) {

  const title = props.title;

  return (
    <div className={style.team__title} style={{width: `${props.width}%`}}>
      {title}
    </div>
  );
}