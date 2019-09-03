    import React from "react"

export default class Form extends React.Component{

    render(){

        const props = this.props;

        return(
            <div className="border-right pl-3 pr-3">
        <h3 className="border-bottom">Formulario</h3>
        <form>

            <div className="form-group row">
                <label htmlFor="codigo"
                    className="col-sm-4 col-form-label">
                    Código:
		        </label>
                <div className="col-sm-8 col-6">
                    <input type="number"
                        className="form-control" id="codigo" value={props.codigo} onChange={props.codigoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="descricao"
                    className="col-sm-4 col-form-label">
                    Descrição:
		        </label>
                <div className="col-sm-8 col-6">
                    <input type="text"
                    className="form-control" id="descricao" value={props.descricao} onChange={props.descricaoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="carga"
                    className="col-sm-4 col-form-label">
                    Carga Horária:
                </label>
                <div className="col-sm-8 col-6">
                    <input type="number"
                    className="form-control" id="carga" value={props.carga} onChange={props.cargaInput} min="4" />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="preco"
                    className="col-sm-4 col-form-label">
                    Preço:
                </label>
                <div className="col-sm-8 col-6">
                    <input type="number"
                    className="form-control" id="preco" value={props.preco} onChange={props.precoInput} min="1" />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="categoria"
                    className="col-sm-4 col-form-label">
                    Categoria:
                </label>
                
                <div className="col-sm-8 col-6">
                    <select className="form-control" id="categoria"
                        onChange={props.categoriaInput}
                        value={props.categoria}>
                            
                        <option value="">Selecione a categoria</option>
                        <option value="INFORMATICA">INFORMATICA</option>
                        <option value="ENGENHARIA">ENGENHARIA</option>
                        <option value="ADMINISTRACAO">ADMINISTRACAO</option>
                        <option value="REDES">REDES</option>

                    </select>
                    
                </div>
            </div>


            <div className="form-group row">
            <button
                className="btn btn-primary ml-3 mb-3" onClick={props.qualquerNOME}>
                { !props._id || props._id === '' ? 'Adicionar' : 'Atualizar' }
			</button>
            </div>

        </form>

        </div>

        )
    }

}