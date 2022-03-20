import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './components/hello-world';
import Labs from './components/labs';
// import Tuiter from './components/tuiter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/tuiter/HomeScreen/HomeScreen';
import './components/tuiter/index.css';
import ExploreScreen from './components/tuiter/ExploreScreen';


function App() {
  return (
    // <BrowserRouter>
    // <div className='container'>
    // <Routes>
    //   <Route exact={true} path="/hello" element={<HelloWorld/>} />
    //   <Route exact={true} path="/" element={<Labs/>} />
    //   <Route exact={true} path="/tuiter" element={<Tuiter/>} />
    //   </Routes>
    // </div>
    // </BrowserRouter>
    <BrowserRouter>
    <div className='container'>
    <Routes>
      <Route exact={true} path="/tuiter/home" element={<HomeScreen/>} />
      <Route exact={true} path="/tuiter/explore" element={<ExploreScreen/>} />
      <Route exact={true} path="/" element={<Labs/>} />
      <Route exact={true} path="/hello" element={<HelloWorld/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
