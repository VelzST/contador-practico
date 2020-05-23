import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './Contador';
import 'semantic-ui-css/semantic.min.css';

const App = () =>{
    return(
        <Contador titulo="Contador + 5"></Contador>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));