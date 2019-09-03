import React from "react"
import Form from "./form"
import List from "./list"
import axios from "axios"

const URL = 'http://localhost:3200/ws/cursos/'

export default class Cadastro extends React.Component{

    //defino na construção da classe (boa prática)
    //State por padrao espera um JSON - uma variável comum, não é aceita
    initialState =  {_id: "",
                     codigo: 1,
                     descricao: "Descrição",
                     carga: 4,
                     preco: 0.0,
                     categoria: "",
                     cursos: []
                    }

    constructor(props){
        super(props)
        this.state = this.initialState
    }

    /*
    função simples, limpando form, voltando as variáveis para initialState
    */
    limpaFormulario(){
        this.setState(this.initialState)
    }

    codigoInput(e) {
        this.setState({ ...this.state, codigo: e.target.value })
    }
    descricaoInput(e) {
        this.setState({ ...this.state, descricao: e.target.value })
    }
    cargaInput(e) {
        this.setState({ ...this.state, carga: e.target.value })
    }
    categoriaInput(e) {
        this.setState({ ...this.state, categoria: e.target.value })
        //this.setState({ ...this.state, categoria: ******e.target.label***** })
    }
    precoInput(e) {
        this.setState({ ...this.state, preco: e.target.value })
    }

    adicionarCurso(e) {

        
        e.preventDefault();
        const _id = this.state._id;
        const codigo = this.state.codigo;
        const descricao = this.state.descricao;
        const carga = this.state.carga;
        const categoria = this.state.categoria;
        const preco = this.state.preco;

        if ((!codigo || codigo === 0) 
            || (!descricao || descricao === "") 
            || (!carga || carga === 0) 
            || (!preco || preco === 0) 
            || (!categoria || categoria === "") 
            ){
                alert("Campos obrigatórios não preenchidos!")
                return; 
            }

            console.log("xxx")

            if (!_id || _id === ""){
                this.setList(codigo, descricao, carga, categoria, preco);
            }else{
                axios.put(URL + _id,  {codigo, descricao, carga, categoria, preco})
                .then(_ => {
                    alert("Curso alterado!");
                    this.getList();
                    this.limpaFormulario();
                }).catch(error => alert ("Não foi possível alterar curso."))
            }
           
        //console.log('Adicionar Curso Init')
    }

    getList(){
        //axios.get(URL).then(response => ... axios.get(URL).then(function(response){ 
        axios.get(URL).then(response => 
            {
                this.setState({ ...this.state, cursos: response.data})
        })
    }

    setList(codigo, descricao, carga, categoria, preco) {

        //em ECMA6, não precisa colocar o nome da chave, pois ele sub entende que já é o nome da variável
        //axios.post(url, {data : data, descricao : descricao, responsavel : responsavel, telefone : telefone})
        axios.post(URL , {codigo, descricao, carga, categoria, preco})
            .then(_ => {
                alert("Curso adicionado");
                this.getList();
                this.limpaFormulario();
            }).catch(error => alert ("Não foi possível cadastrar curso."))
    }

    componentDidMount(){
        this.getList()
    }

    deletaCurso(id){
        console.log("Deletando curso:", id)

        if (!id || id ===""){
            alert("Favor selecionar o curso a ser deletado.")
        }

        axios.delete(URL + id).then(_ =>{
            this.getList()
            alert("Curso deletado com sucesso.")
        }).catch(error =>{
            alert("Não foi possível deletar o curso selecionado.")
            console.log(error)
        })
    }

    selecionaCurso(curso){
        console.log(curso)
        this.setState({ ...this.state,
                        _id: curso._id,
                        codigo: curso.codigo,
                        carga: curso.carga,
                        descricao: curso.descricao,
                        preco: curso.preco,
                        categoria: curso.categoria})
    }

    /*
    atualizaCurso(curso){

        //console.log(curso._id)
        
        axios.get(URL,  { params: { "_id": curso._id }}).then(
            response =>{
                console.log(response.data)
                this.setState({ ...this.state, cursos: response.data})
                //this.codigoInput.bind(curso.codigo)
            }
        )
               
    }*/

    render(){

        console.log(this.state)

        return(

            <div className="row border-bottom ">
                <div className="col-md-6">
                
                    <Form
                     _id={this.state._id}
                     codigo={this.state.codigo}
                     descricao={this.state.descricao}
                     carga={this.state.carga}
                     categoria={this.state.categoria}
                     preco={this.state.preco}
                     
                     //BIND - esta forçando ele interpreta que o THIS que ele está se referenciando é o da classe
                     codigoInput={this.codigoInput.bind(this)}
                     descricaoInput={this.descricaoInput.bind(this)}
                     cargaInput={this.cargaInput.bind(this)}
                     precoInput={this.precoInput.bind(this)}
                     categoriaInput={this.categoriaInput.bind(this)}
                    
                     qualquerNOME={this.adicionarCurso.bind(this)}
                    //qualquerNOME é valor que deverá ser passado para FORM - no caso, passando a função do onClick do botão

                     />

                </div>
                <div className="col-md-6">
                    <List
                    cursos={this.state.cursos}
                    deletaCurso={this.deletaCurso.bind(this)}
                    //atualizaCurso={this.atualizaCurso.bind(this)}
                    selecionaCurso={this.selecionaCurso.bind(this)}
                    />
                </div>
            </div> 
        )
    }
    
}