import React from "react";
import styles from "./styles.module.css";


function BotaoAtendimento(props) {
  return (
    <>
      <button className={styles.botaoAtendimento} onClick={props.onClick}>{props.children}</button>
    </>
  );
}

export default BotaoAtendimento;
