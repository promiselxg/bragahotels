import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import { Bookings, Dashboard, EditBooking, Rooms } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:id/edit" element={<EditBooking />} />
      </Route>
    </Routes>
  );
}

export default App;
