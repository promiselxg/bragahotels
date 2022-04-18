import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { HomeScreen, RoomScreen } from './screens';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/rooms" element={<RoomScreen />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
