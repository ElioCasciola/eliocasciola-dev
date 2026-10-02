import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Cv from './pages/Cv.jsx';
import Intro from './components/Intro.jsx';
import Contacts from './pages/Contacts.jsx';
import Blog from './pages/Blog.jsx';
import Footer from './components/Footer.jsx';

const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            {showIntro && (
                <Intro onFinish={() => setShowIntro(false)} />
            )}

            <Navbar />
            <ScrollToTop />

            <main className="site-main">
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/cv" element={<Cv />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer />
        </>
    );
}

export default App;
