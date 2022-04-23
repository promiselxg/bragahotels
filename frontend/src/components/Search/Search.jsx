import { useState } from 'react';
import { Container } from '../../GlobalStyle';
import { useDispatch } from 'react-redux';
import { SearchContainer, SearchWrapper, SelectBox } from './Search.style';
import { DatePicker, Select } from 'antd';

import Button from '../Button';
import moment from 'moment';
import { searchRooms } from '../../redux/room/roomSearchSlice';

const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormat = 'DD-MM-YYYY';

const Search = () => {
  const [adult, setAdult] = useState(1);
  const [kid, setKid] = useState(0);
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const dispatch = useDispatch();
  const selectDate = (date) => {
    setCheckIn(moment(date[0]).format('DD-MM-YYYY'));
    setCheckOut(moment(date[1]).format('DD-MM-YYYY'));
  };

  const checkRoomAvailability = () => {
    if (!checkIn || !checkOut || !adult) {
      alert('Error');
      console.log(checkIn, checkOut, adult, kid);
    } else {
      const data = {
        checkIn,
        checkOut,
        adult,
        kids: kid,
      };
      dispatch(searchRooms(data));
    }
  };
  return (
    <>
      <SearchWrapper>
        <Container maxWidth="1000px">
          <SearchContainer>
            <SelectBox flex="0.75">
              <div className="dateWrapper">
                <RangePicker format={dateFormat} onChange={selectDate} />
              </div>
            </SelectBox>
            <SelectBox flex="0.1">
              <div className="dateWrapper">
                <Select
                  labelInValue
                  defaultValue={{ value: adult }}
                  onChange={(e) => setAdult(e.value)}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </div>
            </SelectBox>
            <SelectBox flex="0.1">
              <div className="dateWrapper">
                <Select
                  labelInValue
                  defaultValue={{ value: kid }}
                  onChange={(e) => setKid(e.value)}
                >
                  <Option value="0">0</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </div>
            </SelectBox>
            <Button
              label="Check availability"
              bg="var(--yellow)"
              onClick={checkRoomAvailability}
            />
          </SearchContainer>
        </Container>
      </SearchWrapper>
    </>
  );
};

export default Search;
