import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {dataInput, nomeInput, emailInput, assuntoInput, enviarContato} from "../../actions/contatoActions"

class Form extends React.Component{

constructor(props){
    super(props)
    //this.props.bind(this)
}

    enviar = async(e) => {
        
        e.preventDefault() //não faz o submit

        const { data, nome, email, assunto } = this.props;

        if (
            (!data || data === '')
            || (!nome || nome === '')
            || (!email || email === '')
            || (!assunto || assunto === '')
            ){
                alert("Campos obrigatórios não preenchidos!")
                return;
            }

        enviarContato(data, nome, email, assunto).then(_ =>{
            alert("Dados enviados com sucesso. Aguarde nosso retorno!")
        })

    }

    render(){

        const { data, nome, email, assunto, dataInput, nomeInput, emailInput, assuntoInput } = this.props; //as variáveis de const estão recebendo valores setados pela STATE

        return(

            <div>
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="data" className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-9">
                            <input type="date" className="form-control" id="data"
                                value={data} onChange={dataInput} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="nome" className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="nome"
                                value={nome} onChange={nomeInput} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="email"
                                value={email} onChange={emailInput} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="assunto" className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" id="assunto" rows="5"
                                value={assunto} onChange={assuntoInput} />
                        </div>
                    </div>

                    <div className="text-right">
                        <button className="btn btn-primary ml-3 mb-3"
                            onClick={this.enviar} >Enviar</button>
                    </div>

                </form>
            </div>

        )

    }

}

//padrão decorator
const mapStateToProps = state => ({
    data: state.contato.data, //state.contato herda de index.js (reducers)
    nome: state.contato.nome,
    email: state.contato.email,
    assunto: state.contato.assunto
})

const mapDispatchToProps = dispatch => bindActionCreators({
    dataInput,
    nomeInput,
    emailInput,
    assuntoInput,
    enviarContato
}, dispatch)

//aqui temos duas conexões - Estados e funcções
export default connect(mapStateToProps,mapDispatchToProps)(Form)