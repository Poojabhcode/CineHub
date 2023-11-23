import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite  from './Components/Favourite';
import { BrowserRouter as Router, Switch,Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (  
    <Router>
       <Navbar/>
          <Routes>
                <Route path='/' element={<>
                    <Banner />
                    <Movies />
                    </>} />
                <Route path='/favourites' element={<Favourite/>} exact/>
          </Routes>
    </Router>
  );
}

export default App;