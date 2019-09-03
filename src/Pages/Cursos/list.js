import React from "react"

export default class List extends React.Component{
    
    exibirLinhas(){
        //console.log('cursos:', this.props);

        //var valor = cursos.preco
        if(this.props && this.props.cursos && this.props.cursos.length > 0){
            const {cursos} = this.props;

            return cursos.map(curso => (
                <tr key={'curso-list-' + curso._id}>
                    <td className="text-center">{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                    <td className="text-center">{curso.carga}</td>
                    <td className="text-right">{curso.preco}</td>
                    <td>{curso.categoria}</td>

                    <td className="row">
                        <button className="btn btn-success" onClick={() => this.props.selecionaCurso(curso)}>
                            {/*() => | essa função informa que só será executado somente se for clicado, caso 
                             contrário, ele seria acionado sem clicar no button*/}
                            <i className="fa fa-check"></i>
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => this.props.deletaCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>

                </tr>
            ));
        }
    }

    render(){
        return (
            <div>
                <h3>Lista de Compromissos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Carga Horária</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}