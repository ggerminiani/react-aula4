import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import {BrowserRouter} from "react-router-dom"; // gerencia as rotas


//adicionando componentes REDUX
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./Reducers"

//cria STORE do redux, através de redutores
const store = createStore(reducer)


//vai trabalhar as rotas
ReactDOM.render(
                //gerencia se alteraa URL
                
                <BrowserRouter>
                {/*tudo que estiver abaixo de PROVIDER, será adicionado à STORE*/}
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root'));