import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import DogPage from './Pages/DogPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={DogPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
