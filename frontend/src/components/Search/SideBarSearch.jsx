import { DatePicker, Select } from 'antd';
import React from 'react';
import { Button } from '../index';
import { Typography } from '../../GlobalStyle';
import { SearchBox } from '../Room/Room.style';
const { Option } = Select;
const SideBarSearch = () => {
  return (
    <>
      <SearchBox>
        <div className="search__wrapper">
          <Typography as="h2" fontSize="1.5rem">
            Search
          </Typography>
          <div className="fields">
            <div className="datefield">
              <span>Check-in date</span>
              <div className="date">
                <DatePicker placeholder="check-in" />
              </div>
            </div>
            <div className="datefield">
              <span>Check-out date</span>
              <div className="date">
                <DatePicker placeholder="check-out" />
              </div>
            </div>
            <div className="selectField">
              <div className="select">
                <Select defaultValue={{ value: 'lucy' }}>
                  <Option value="jack">Jack (100)</Option>
                  <Option value="lucy">Lucy (101)</Option>
                </Select>
              </div>
              <div className="select">
                <Select labelInValue defaultValue={{ value: 'lucy' }}>
                  <Option value="jack">Jack (100)</Option>
                  <Option value="lucy">Lucy (101)</Option>
                </Select>
              </div>
            </div>
            <Button bg="var(--blue)" label="Search" />
          </div>
        </div>
      </SearchBox>
    </>
  );
};

export default SideBarSearch;
