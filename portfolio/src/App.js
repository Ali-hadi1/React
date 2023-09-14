import './Style.scss';
import { Route, Router } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<Layout />} />
      </Router>
    </div>
  );
}

export default App;
