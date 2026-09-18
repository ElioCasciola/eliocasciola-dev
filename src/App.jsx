import { Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Cv from './pages/Cv.jsx';
import { useState } from 'react';
import Intro from './components/Intro.jsx';

function App() {
    const [showIntro, setShowIntro] = useState(true);
    if (showIntro) {
        return <Intro onFinish={() => setShowIntro(false)} />;
    }
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/cv" element={<Cv />} />
                </Routes>
            </main>
        </>
    );
}

export default App;