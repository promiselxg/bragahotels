import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import {
  AddBooking,
  AddRooms,
  Bookings,
  Dashboard,
  EditBooking,
  EditRoom,
  Rooms,
} from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/new" element={<AddRooms />} />
        <Route path="/rooms/:id/edit" element={<EditRoom />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/new" element={<AddBooking />} />
        <Route path="/bookings/:id/edit" element={<EditBooking />} />
      </Route>
    </Routes>
  );
}

export default App;
