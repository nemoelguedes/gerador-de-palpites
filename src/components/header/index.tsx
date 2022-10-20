import style from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Modal from "components/header/info";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Header() {

  const [modalOpen, setModalOpen] = useState(false);

  const modalClosed = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <header className={style.header}>
        <Logo className={style.logo} />
        <h2 className={style.title}>Gerador de Palpites da Copa</h2>
        <div className={style.info}>
          <span className={style.info__icon} onClick={modalClosed}>
            {modalOpen ? <AiOutlineCloseCircle className={style["info__icon"]} /> : <GoInfo className={style["info__icon"]} />}
          </span>
        </div>
      </header>
      <hr className={style.hrHeader}></hr>
      <section className={modalOpen ? style["modal--open"] : style["hidden"]}>
        <Modal />
      </section>

    </>
  );
}


