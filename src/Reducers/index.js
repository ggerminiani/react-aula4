import {combineReducers} from "redux"
import contatoReducer from "./contatoReducer"

//na const reducers, estou criando um JSON  (no caso contato), trazendo a INITIAL_STATE do contatoReducer.js
//seria possível trabalhar com outras classes, importando outros JSONs

const reducers = combineReducers({
    contato: contatoReducer //essas informações serão setadas na state do form.js (contato)
})

export default reducers