import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HomeScreen,
  RoomScreen,
  RoomInfoScreen,
  PageNotFound,
  RoomCategoryScreen,
  CheckOutScreen,
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
          <Route path="/rooms/:roomid/book" element={<CheckOutScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer hideProgressBar newestOnTop={true} />
      </Layout>
    </>
  );
}

export default App;
