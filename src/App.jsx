import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Overview from './Pages/Overview/Overview';


const App  = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Overview/>} />
    </Routes>
    </Router>
   
  );
};

export default App ;
