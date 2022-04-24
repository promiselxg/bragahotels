import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/rooms';

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
const roomService = {
  getAllRooms,
  getRoomDetails,
};

export default roomService;
