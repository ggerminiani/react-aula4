import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"

import Cursos from "../Pages/Cursos"
import Contatos from "../Pages/Contatos"

export default class Rotas extends Component{

    render(){
        return(
            <Switch>
                
                <Route path="/Crusos" component={Cursos}></Route>
                <Route path="/Contato" component={Contatos}></Route>
                <Route path="*" component={Cursos}></Route>

                {/* o path * significa qualquer outro */}
                {/* todos os atributos de um componente deve ser minúsculo - por conta disso, se colocasse Component com C maiúsculo, o comando não seria reconhecido */}
            </Switch>
        )
    }

}