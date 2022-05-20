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
  LoginScreen,
  Dashboard,
} from './screens';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/rooms" element={<RoomScreen />} />
          <Route path="/room/:id" element={<RoomInfoScreen />} />
          <Route path="/rooms/:category" element={<RoomCategoryScreen />} />
          <Route path="/rooms/:roomid/book" element={<CheckOutScreen />} />
        </Route>
        <Route path="/admin">
          <Route index element={<Dashboard />} />
          <Route path="reservations" element={<Dashboard />} />
        </Route>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer hideProgressBar newestOnTop={true} />
    </>
  );
}

export default App;
