/*const INITIAL_STATE = {
    data: "2019-01-01",
    nome: "Gustavo", //o nome do campo deve ser o mesmo do form.js(contato), na const, sendo passada para o value do input
    email: "ggg@hotmail.com",
    assunto: "Introduzindo REDUX em contatos"
}*/

const INITIAL_STATE = {
    data: "",
    nome: "",
    email: "",
    assunto: ""
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case "DATA_INPUT": return {...state, data: action.info} //seria possível, ao invés de retornar somente uma varáivel (no caso action.info para data), poderia retornar um JSON com uma coleção de dados
        case "NOME_INPUT": return {...state, nome: action.info}
        case "EMAIL_INPUT": return {...state, email: action.info}
        case "ASSUNTO_INPUT": return {...state, assunto: action.info}
        case "ENVIAR_CONTATO": return {INITIAL_STATE}

        default: return state

    }

}