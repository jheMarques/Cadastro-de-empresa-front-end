import React from "react";

import Cabecalho from '../Cabecalho'
import Rodape from "../Rodape";

const Pagina=(props)=>{
    return(
       <section>
        <Cabecalho/>
         
         {props.children}

        <Rodape/>
       </section>
    );
}
export default Pagina;