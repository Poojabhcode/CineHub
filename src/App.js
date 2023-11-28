import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite  from './Components/Favourite';
import { BrowserRouter as Router, Switch,Route, Routes} from 'react-router-dom';
import './App.css';
import MovieCardDetails from './Components/MovieCardDetails';


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
                <Route path='/moviecard' element={<MovieCardDetails />} /> 
          </Routes>
    </Router>
  );
}

export default App;