import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import { BookProvider } from './context/BookContext';

export default function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}
