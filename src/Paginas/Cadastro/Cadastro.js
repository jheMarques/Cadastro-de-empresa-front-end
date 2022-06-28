import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmpresaService from "../../Componentes/services/EmpresaService";


import  './estilo.css';

const Cadastro = () => {
  const [empresa, setEmpresa] = useState({
    id:'',
    cnpj: '',
    nome: '',
    endereço: '',
    telefone: '',
    cidade: '',
    estado: ''
  });

  const [status, setStatus]= useState({
    type:"",
    mensagem:"",
  });

  const navigate=useNavigate();
  
  const handleChange = (e) => {
    const value = e.target.value;
    setEmpresa({ ...empresa, [e.target.name]: value });
  };

  const saveEmpresa = (e) => {
    e.preventDefault();
    if(!validate())return;
    EmpresaService.saveEmpresa(empresa)
      .then((response) => {
        console.log(response);
        navigate("/empresas")
      })
      .catch((error) => {
        console.log(error);
        return setStatus({type:'duplicated', mensagem:'cnpj já cadastrado no banco de dados'});
      });
  };
  const reset =(e)=>{
    e.preventDefault();
    setEmpresa({
      cnpj: '',
      nome: '',
      endereço: '',
      telefone: '',
      cidade: '',
      estado: ''
    });
  };
  function validate(){
    if(!empresa.cnpj) return setStatus({type:'error', mensagem:'campo cnpj não pode estar em branco!'});
    if(!empresa.nome) return setStatus({type:'error', mensagem:'campo nome não pode estar em branco!'});
    if(!empresa.endereço) return setStatus({type:'error', mensagem:'campo endereço não pode estar em branco!'});
    if(!empresa.telefone) return setStatus({type:'error', mensagem:'campo telefone não pode estar em branco!'});
    if(!empresa.cidade) return setStatus({type:'error', mensagem:'campo cidade não pode estar em branco!'});
    if(!empresa.estado) return setStatus({type:'error', mensagem:'campo estado não pode estar em branco!'});
  
    return true;
  }


  return (
    <section>
       <button
            onClick={() => navigate("/empresas")}
            className="btn btn-primary">
            voltar
            </button>
      <div>
          <h1>Adicionar nova empresa</h1>
        {status.type==='error' ? <p className="error">{status.mensagem}</p>: ""}
          <label className="row">
            cnpj
          </label>
          <input
            type="text"
            name="cnpj"
            value={empresa.cnpj}
            onChange={(e) => handleChange(e)}>
            </input>
            {status.type==='duplicated' ? <p className="error">{status.mensagem}</p>: ""}
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
                style={{marginLeft: "10px"}}
                onClick={saveEmpresa}
                className="btn btn-success">
                Salvar
              </button>
              <button
                style={{marginLeft: "10px"}}
                onClick={reset}
                className="btn btn-danger">
                Limpar
              </button>
          </div>
      </div>
    </section>
  );
};

export default Cadastro;