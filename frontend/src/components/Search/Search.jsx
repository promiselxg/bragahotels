import { Container } from '../../GlobalStyle';
import { SearchContainer, SearchWrapper, SelectBox } from './Search.style';
import { DatePicker, Select } from 'antd';

import Button from '../Button';
const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const Search = () => {
  return (
    <>
      <SearchWrapper>
        <Container maxWidth="1000px">
          <SearchContainer>
            <SelectBox flex="0.75">
              <div className="dateWrapper">
                <RangePicker format={dateFormat} />
              </div>
            </SelectBox>
            <SelectBox flex="0.1">
              <div className="dateWrapper">
                <Select value="Adult">
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
                <Select value="Children">
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

            <Button label="Check availability" bg="var(--yellow)" />
          </SearchContainer>
        </Container>
      </SearchWrapper>
    </>
  );
};

export default Search;
