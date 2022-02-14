import React from 'react';

import Menu from './components/Menu';

//Importar componentes
import {PaginasApp} from './data/PaginasApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
      
      <p>
        Resuelve los ejercicios propuestos. Para ello, haz un fork de este repositorio desde tu
        cuenta de Github y sube un enlace a la tarea de examen. El repositorio debe
        tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
        son los tuyos.
      </p>
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
      </Router>
    </div>
  );
}

export default App;
