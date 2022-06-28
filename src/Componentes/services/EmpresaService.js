import axios from "axios";

const Empresa_api_base_url="http://localhost:8080/api/empresas";

class EmpresaService{
    getEmpresas(){
        return axios.get(Empresa_api_base_url);
    }

    saveEmpresa(empresa){
        return axios.post(Empresa_api_base_url, empresa);
    }
    deleteEmpresa(id){
        return axios.delete(Empresa_api_base_url + '/' + id);
    }
    getEmpresasById(id){
        return axios.get(Empresa_api_base_url + '/' + id)
    }
    updateEmpresa(empresa,id){
        return axios.put(Empresa_api_base_url + '/' + id, empresa);
    }
}
export default new EmpresaService();