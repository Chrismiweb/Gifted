// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Component/SignIn';
import Hero from './Component/LandingPage';
import SignUp from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import LandingPage from './Component/LandingPage';
import CoursePage from './Component/CoursePage';
// import Api from './Component/Api';
import PlanPage from './Component/PlanPage';
import QuizPage from './Component/QuizPage';
import PaymentPage from './Component/PaymentPage';
import ReferralPage from './Component/ReferralPage';
import LeaderboardPage from './Component/LeaderboardPage';
import SettingPage from './Component/SettingPage';
import GethelpPage from './Component/GethelpPage';
import CommunityPage from './Component/CommunityPage';
// import Asidebar from './Component/Asidebar';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='hero' element={<Hero />}/>
            <Route path='/sign' element={<SignIn />}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Course' element={<CoursePage/>}/>
            <Route path='/Planpage' element={<PlanPage/>}/>
            <Route path='/QuizPage' element={<QuizPage/>}/>
            <Route path='/PaymentPage' element={<PaymentPage/>}/>
            <Route path='/ReferralPage' element={<ReferralPage/>}/>
            <Route path='/Leaderboard' element={<LeaderboardPage/>}/>
            <Route path='/SettingPage' element={<SettingPage/>}/>
            <Route path='/Gethelp' element={<GethelpPage/>}/>
            <Route path='/CommunityPage' element={<CommunityPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
