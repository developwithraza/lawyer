import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginPage from './authentication/login/LoginPage';
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import Dashboards from './component/dashboard/lawyer_dashboard/Dashboards';
import AllLawyer from './pages/AllLawyer';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<LoginPage /> }/>
      <Route path='/dashboard'  element={<Dashboards  />} >
        <Route index element={<Navbar />}/>
        <Route path='/dashboard/all_lawyer' element={<AllLawyer />} />
        <Route path='/dashboard' element={<NotFound />} />
        <Route path='/dashboard/user' element={<NotFound />} />
        <Route path='/dashboard/cases' element={<NotFound />} />
        <Route path='/dashboard/dept' element={<NotFound />} />
        <Route path='/dashboard/notify' element={<NotFound />} />
        <Route path='/dashboard/meet' element={<NotFound />} />
        <Route path='/dashboard/book' element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
