import {Routes, Route} from 'react-router-dom';
import {Home} from './routes/home/home.component';
import {Navigation} from './routes/navigation/navigation.component'
import {Play} from './routes/play/play.component'
import './App.css';

function App() {
  return (
    <Routes>
     <Route path='/' element = {<Navigation/>}> 
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/play' element={<Play/>}/>
      </Route>
    </Routes>
  )
}

export default App;
