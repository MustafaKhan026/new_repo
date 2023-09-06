import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SignMessage from './Components/SignMessage';
import VerifyMessage from './Components/VerifyMessage';
import AircAdmin from './Components/AircAdmin'
import Temp from './Components/temp'
import SignInSignUpPage from './Components/SignInSignUp';
import UniversityPage from './Components/page/universitypage'
import ClientPage from './Components/page/clientpage'
import AdminPage from './Components/page/adminpage'

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Router>
          <Routes>
            <Route path='/' element={<SignInSignUpPage />} />
            <Route path='/university' element={<UniversityPage />} />
            <Route path='/company' element={<ClientPage />} />
            <Route path='/admin' element={<AdminPage />} />

            {/* <Route path="/signMessage" element={<SignMessage />} />
            <Route path="/verifyMessage" element={<VerifyMessage />} /> */}
            {/* <Route path="/admin" element={<AircAdmin />} /> */}
            {/* <Route path="/temp" element={<Temp />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
