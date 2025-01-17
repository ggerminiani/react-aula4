import axios from "axios"
const URL = 'http://localhost:3200/ws/contatos/'
//o correto seria criar uma API para a URL ao inves desta const

export const dataInput = e => ({
    type: "DATA_INPUT",
    info: e.target.value
})

export const nomeInput = e => ({
    type: "NOME_INPUT",
    info: e.target.value
})

export const emailInput = e => ({
    type: "EMAIL_INPUT",
    info: e.target.value
})

export const assuntoInput = e => ({
    type: "ASSUNTO_INPUT",
    info: e.target.value
})

export const enviarContato = (data, nome, email, assunto) => {
    const request = axios.post(URL, {data, nome, email, assunto})
    return {
        type: "ENVIAR_CONTATO",
        info: request
    }
}