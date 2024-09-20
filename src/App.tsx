import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginButton from './components/login/LoginButton';
import LoginPage from './components/login/LoginPage';
import KakaoLoginRedirect from './components/login/kakao/KakaoLoginRedirect';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', backgroundColor: '#f0f0f0' }}>
                        <LoginButton />
                    </div>
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/kakao/oauth/callback" element={<KakaoLoginRedirect />} />
            </Routes>
        </Router>
    );
};

export default App;