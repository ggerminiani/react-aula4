import React from "react"

import Cabecalho from "../../Components/Cabecalho"
import Contato from "./contato"

export default class Contatos extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){

        return(
            
            <div className="container">
                <Cabecalho
                    titulo="Contato"
                    subtitulo="entre em contato conosco"
                />
                <Contato/>
            </div>

        )

    }

}