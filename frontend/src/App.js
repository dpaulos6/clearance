import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss';
import { Helmet } from 'react-helmet';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Helmet>
        <title>Clearance</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
