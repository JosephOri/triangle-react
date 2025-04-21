import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './InputPage';
import TriangleDisplay from './TriangleDisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/display" element={<TriangleDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
