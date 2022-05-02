import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/rooms';
const config = {
  'Content-Type': 'appilcation/json',
};
//  Get all rooms
const getAllRooms = async (data) => {
  if (data === 'all') {
    const response = await axios.get(API_URL);
    if (response.data) {
      localStorage.setItem('rooms', JSON.stringify(response.data));
    }
    return response.data;
  } else {
    const { adult, kids } = data;
    const response = await axios.get(`${API_URL}/?adult=${adult}&kids=${kids}`);
    if (response.data) {
      localStorage.setItem('rooms', JSON.stringify(response.data));
      localStorage.setItem('search', JSON.stringify(data));
    }
    return response.data;
  }
};

//  Get single room details
const getRoomDetails = async (roomid) => {
  const response = await axios.get(`${API_URL}/${roomid}`);
  return response.data;
};

//  get rooms by category
const getRoomsByCategory = async (data) => {
  const response = await axios.post(`${API_URL}/filter`, data, config);
  return response.data;
};

//  filter rooms
const filterRoom = async (data) => {
  const response = await axios.post(`${API_URL}/filter`, data, config);
  return response.data;
};

//  Room Reservation /api/v1/rooms/:id/book

const roomReservation = async (data) => {
  const { roomid } = data.roomInfo;
  const response = await axios.post(`${API_URL}/${roomid}/book`, data, config);
  return response.data;
};
const payment = async (data) => {
  const { roomid } = data;
  const response = await axios.put(
    `${API_URL}/${roomid}/payment`,
    data,
    config
  );
  return response.data;
};
const roomService = {
  getAllRooms,
  getRoomDetails,
  getRoomsByCategory,
  filterRoom,
  roomReservation,
  payment,
};

export default roomService;
