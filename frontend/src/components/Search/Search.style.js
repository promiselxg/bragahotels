import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 100%;
  top: -30px;
  position: relative;
  display: flex;
`;
export const SearchContainer = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);

  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : '')};
  .dateWrapper {
    width: 100%;
  }
  .ant-picker {
    width: 100%;
    border: none;
    outline: none !important;
    .ant-picker-input:nth-child(3) {
      & > input {
        text-align: right;
      }
    }
  }
  .date {
    display: flex;
    justify-content: space-between;
  }
  .ant-select-selector {
    border: none !important;
  }
  .ant-picker-active-bar {
    display: none;
  }
`;
