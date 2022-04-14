import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [rooms, setRooms] = useState({});

  const fetchData = async () => {
    const response = await axios.get('api/v1/rooms');
    const { data } = response;
    setRooms(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <h1>heding</h1>
      {console.log(rooms.data)}
      {rooms?.data?.map((room, i) => (
        <ul key={i}>
          <li>{room?.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
