// Importantando o React
import React from "react";

// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/home/home";

const Main = () => (
  <div className="container">
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>	
    </main>
  </div>
);

export default Main;