import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Start/Home';
import Toaster from 'react-hot-toast'
function App() {
  return (
    <div className='bg-black'>
      <Toaster position="top-center"/>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
