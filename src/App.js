import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column justify-content-between min-vh-100">
                <Navbar />
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
    );
}

export default App;
