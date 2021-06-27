import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Paginas/Home'
import Produtos from './Paginas/Produtos'
import Servicos from './Paginas/Servicos'
import ProdutoDetalhe from './Paginas/ProdutoDetalhe'
import ServicoDetalhe from './Paginas/ServicoDetalhe'
import Navbar from './Componentes/Navbar'
import Pagina404 from './Paginas/Pagina404';

function App() {


  
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/produtos">
      <Produtos/>
    </Route>
    <Route exact path="/servicos">
      <Servicos/>
    </Route>
    <Route path="/produtos/:id">
      <ProdutoDetalhe/>
    </Route>
    <Route path="/servicos/:id">
      <ServicoDetalhe/>    
    </Route>

    <Route>
      <Pagina404/>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
