import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './components/hello-world';
import Labs from './components/labs';
import Tuiter from './components/tuiter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './components/tuiter/index.css';
import ExploreScreen1 from './components/tuiter/ExploreScreen1';
import ProfileScreen from './components/tuiter/ProfileScreen';
import ProfileItem from './components/tuiter/ProfileItem';
import EditProfileItem from './components/tuiter/EditProfileItem';
import HomeScreenProf from './components/tuiter/HomeScreenProf/HomeScreenProf';


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
      <Route path="/">
        <Route path="labs" exact={true} element={<Labs />} /> 
        <Route path="hello" exact={true} element={<HelloWorld/>} />
        <Route path="tuiter" exact={true} element={<Tuiter />}>
          <Route index element={<HomeScreenProf />} />
          <Route path="home" exact={true} element={<HomeScreenProf />} />
          <Route path="explore" exact={true} element={<ExploreScreen1 />} />
            <Route path="profile" exact={true} element={<ProfileScreen />} >
              <Route index element={<ProfileItem />} />
              <Route path="edit" exact={true} element={<EditProfileItem />} />
            </Route>
        </Route>
      </Route>
      </Routes>
      {/* <Route exact={true} path="/tuiter/home" element={<HomeScreen/>} />
      <Route exact={true} path="/tuiter/explore" element={<ExploreScreen/>} />
      <Route exact={true} path="/" element={<Labs/>} />
      <Route exact={true} path="/hello" element={<HelloWorld/>} /> */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
