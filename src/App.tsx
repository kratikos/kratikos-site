import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Features, HowItWorks, About, Contact } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recursos" element={<Features />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
