
import './App.css';
import Create from './component/Create/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './component/View/View';
import Update from './component/Update/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={View} />
          <Route exact path='/createStudent' Component={Create} />
          <Route exact path='/UpdateStudent/:id' Component={Update} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
