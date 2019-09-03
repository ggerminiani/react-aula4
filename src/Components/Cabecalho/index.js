import React from "react"

export default class Cabecalho extends React.Component{

    constructor(props){
        super(props)}

    render(){

        //outra maneira de instanciar o props:
        const {titulo, subtitulo} = this.props

        return(
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong> {this.props.titulo} </strong> -
                <small> {this.props.subtitulo} </small></h2>
            </header>
        )
    }
}