import React from "react"

import Cabecalho from "../../Components/Cabecalho"
import Cadastro from "./cadastro"

export default class Cursos extends React.Component {

    //deve-se instanciar o construtor para pegar PROPOS do componente externo
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
                <Cabecalho 
                    titulo="Compromisso"
                    subtitulo="entre em contato conosco">
                </Cabecalho>
                <Cadastro/>
            </div>
        )
    }

}