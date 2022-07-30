import React, { useEffect , useState } from "react";
import styles from "./styles.module.css";
import api from '../../api'

function Noticias(props) {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function buscarNoticias(){
      const resposta = await api.get("/vitimas/receber-links")
      setNoticias(resposta.data)
      console.log("olha o que veio da api!!!",resposta.data)
    }
    buscarNoticias()
  },[]);

  return (
    <>
        <div>
        {
             noticias.map((noticia) =>(
              <p>{noticia}</p>
             ))
           }
        </div>
    </>
  );
}

export default Noticias;