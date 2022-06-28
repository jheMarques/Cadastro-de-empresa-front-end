import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import EmpresaService from "../../Componentes/services/EmpresaService";


const ListaEmpresas = () => {
    const navigate = useNavigate();

    const [loading, setLoading]= useState(true);
    const [empresas, setEmpresas]= useState(null);

    useEffect(()=> {
        const fetchData = async() =>{
            setLoading(true);
            try{
                const response=await EmpresaService.getEmpresas();
                setEmpresas(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    const deleteEmpresa = (e, id)=>{
        e.preventDefault();
        EmpresaService.deleteEmpresa(id).then((res)=>{
            if(empresas){
                setEmpresas((prevElement)=>{
                    return prevElement.filter((empresa)=> empresa.id !==id);
                });
            }
        });
    };
    const editEmpresa=(e,id)=>{
        e.preventDefault();
        navigate(`/atualizarEmpresa/${id}`)
    };

    return (
        <section>
            <div className="h-12">
            <button
            onClick={() => navigate("/addEmpresa")}
            className="btn btn-primary">
            Adicionar Empresa
            </button>
            </div>
            <h2 className="texto-centro">Lista de Empresas</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>cnpj</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Telefone</th>
                            <th>Cidade</th>
                            <th>estado</th>

                        </tr>
                   </thead>
                   {!loading && (
                   <tbody className="bg-white">
                    {empresas.map((empresa) => (
                     <tr key={empresa.id}>
                        <td>{empresa.cnpj}</td>
                        <td>{empresa.nome}</td>
                        <td>{empresa.endereço}</td>
                        <td>{empresa.telefone}</td>
                        <td>{empresa.cidade}</td>
                        <td>{empresa.estado}</td>
                        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                        <button
                            style={{marginLeft: "10px"}}
                            className="btn btn-info"
                            onClick={(e, id) =>editEmpresa(e, empresa.id)}>
                            Editar
                        </button>
                        <button
                            style={{marginLeft: "10px"}}
                            className="btn btn-danger"
                            onClick={(e, id) =>deleteEmpresa(e, empresa.id)}>
                            excluir
                        </button>
                        </td>
                     </tr>
                     ))}                    
                    </tbody>
                    )}
                </table>

            </div>
        </section>

    );
}
export default ListaEmpresas;