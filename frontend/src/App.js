import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  HomeScreen,
  RoomScreen,
  RoomInfoScreen,
  PageNotFound,
  RoomCategoryScreen,
} from './screens';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/rooms" element={<RoomScreen />} />
          <Route path="/room/:id" element={<RoomInfoScreen />} />
          <Route path="/rooms/:category" element={<RoomCategoryScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
