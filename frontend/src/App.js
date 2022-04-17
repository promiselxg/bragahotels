import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
