import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./contexts/github/GithubContext";

function App() {
    return (
        <GithubProvider>
            <Router>
                <div className="d-flex flex-column justify-content-between min-vh-100">
                    <Navbar2 />
                    <main className="container-fluid fs-4 mx-auto px-3 pb-3">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/notfound" element={<NotFound />}></Route>
                            <Route path="/*" element={<NotFound />}></Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </GithubProvider>
    );
}

export default App;
