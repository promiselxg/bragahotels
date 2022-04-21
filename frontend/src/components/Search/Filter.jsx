import React from 'react';
import { FilterWrapper } from './Filter.style';
import { Checkbox } from 'antd';
import { Typography } from '../../GlobalStyle.js';

const Filter = () => {
  return (
    <>
      <FilterWrapper>
        <div className="container">
          <div className="header__title">
            <Typography as="h3" fontSize="1rem" fontWeight="600">
              Filter by:
            </Typography>
          </div>
          <div className="filter">
            <Typography as="h3" fontSize="1rem" fontWeight="600">
              Popular filters
            </Typography>
            <div className="filter__items">
              <Checkbox>Free Wifi</Checkbox>
              <span>09</span>
            </div>
            <div className="filter__items">
              <Checkbox>Air conditioning</Checkbox>
            </div>
            <div className="filter__items">
              <Checkbox>Non-smoking rooms</Checkbox>
            </div>
          </div>
          <div className="filter">
            <Typography as="h3" fontSize="1rem" fontWeight="600">
              Star rating
            </Typography>
            <div className="filter__items">
              <Checkbox>1 star</Checkbox>
              <span>09</span>
            </div>
            <div className="filter__items">
              <Checkbox>2 star</Checkbox>
            </div>
            <div className="filter__items">
              <Checkbox>3 star</Checkbox>
            </div>
            <div className="filter__items">
              <Checkbox>4 star</Checkbox>
            </div>
            <div className="filter__items">
              <Checkbox>5 star</Checkbox>
            </div>
          </div>
        </div>
      </FilterWrapper>
    </>
  );
};

export default Filter;
