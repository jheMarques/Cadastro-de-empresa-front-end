import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ListaEmpresas from "../../Paginas/ListaDeEmrpesas/ListaEmpresas";
import Cadastro from "../../Paginas/Cadastro/Cadastro";
import EditarEmpresas from "../../Paginas/Cadastro/EditarEmpresa";

const Rotas=()=>(
    <section>
        <BrowserRouter>
            
                <Routes>
                    <Route index  element = {<ListaEmpresas/>}></Route>
                    <Route path = "/" element = {<ListaEmpresas/>}></Route>
                    <Route path = "/empresas"  element = {<ListaEmpresas/>}></Route>
                    <Route path="/addEmpresa" element ={<Cadastro/>}></Route>
                    <Route path="/atualizarEmpresa/:id" element ={<EditarEmpresas/>}></Route>
                </Routes>
            
         </BrowserRouter>
    </section>
    );

export default Rotas;