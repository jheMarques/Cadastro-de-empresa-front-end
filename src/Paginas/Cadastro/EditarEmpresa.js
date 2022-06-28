import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpresaService from "../../Componentes/services/EmpresaService";

import  './estilo.css';

const EditarEmpresas = () => {
    
    const {id}= useParams();
    const navigate=useNavigate();

    const [empresa, setEmpresa] = useState({
        id: id,
        cnpj: '',
        nome: '',
        endereço: '',
        telefone: '',
        cidade: '',
        estado: '',
      });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmpresa({ ...empresa, [e.target.name]: value });    
      };
      
    useEffect(()=>{
       const fetchData= async ()=>{
        try{
            const response= await EmpresaService.getEmpresasById(empresa.id);
            setEmpresa(response.data);
        }catch(error){
            console.log(error);
        }
       };
       fetchData();
    }, []);
    
    const updateEmpresa=(e)=>{
        e.preventDefault();
       console.log(empresa);
        EmpresaService.updateEmpresa(empresa,id)
        .then((response) => {
            navigate("/empresas");
          })
          .catch((error) => {
            console.log(error);
          });
       
    
    };
    return (
        <section>
            <div className="flex max-w-2xl mx-auto shadow border-b">
                
                    <div>
                        <h1>editar  empresa</h1>
                    </div>
                    
                        <label className="row">
                            cnpj
                        </label>
                        <input
                            type="text"
                            name="cnpj"
                            value={empresa.cnpj}
                            onChange={(e) => handleChange(e)}>
                        </input>
                  
                        <label className="row">
                            nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            value={empresa.nome}
                            onChange={(e) => handleChange(e)}>
                        </input>
                   
                        <label className="row">
                            endereço
                        </label>
                        <input
                            type="text"
                            name="endereço"
                            value={empresa.endereço}
                            onChange={(e) => handleChange(e)}>
                        </input>
                   
                        <label className="row">
                            telefone
                        </label>
                        <input
                            type="text"
                            name="telefone"
                            value={empresa.telefone}
                            onChange={(e) => handleChange(e)}>
                        </input>
                  
                        <label className="row">
                            cidade
                        </label>
                        <input
                            type="text"
                            name="cidade"
                            value={empresa.cidade}
                            onChange={(e) => handleChange(e)}>
                        </input>
                        <label className="row">
                            estado
                        </label>
                        <input
                            type="text"
                            name="estado"
                            value={empresa.estado}
                            onChange={(e) => handleChange(e)}>
                        </input>
                    

                    <div className="row">
                        <button
                            style={{ marginLeft: "10px" }}
                            onClick={updateEmpresa}
                            className="btn btn-success">
                            Atualizar
                        </button>
                        <button
                            onClick={()=> navigate("/empresas")}
                            style={{ marginLeft: "10px" }}
                            className="btn btn-danger">
                            cancelar
                        </button>
                    </div>
            </div>
        </section>
    )
}
export default EditarEmpresas;