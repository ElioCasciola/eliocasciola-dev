import { Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Cv from './pages/Cv.jsx';
import { useState } from 'react';
import Intro from './components/Intro.jsx';
import Contacts from './pages/Contacts.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';

function App() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            {showIntro && (
                <Intro onFinish={() => setShowIntro(false)} />
            )}

            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/cv" element={<Cv />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
