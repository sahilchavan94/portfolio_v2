import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Start/Home';

function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
