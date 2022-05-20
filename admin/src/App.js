import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import { Dashboard } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
