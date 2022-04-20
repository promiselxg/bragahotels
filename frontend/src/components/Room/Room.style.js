import styled from 'styled-components';

export const RoomContainer = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;
export const RoomHeader = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  margin: 20px 0;
`;
export const RoomContent = styled.div`
  width: 100%;

  .container {
    display: flex;
    width: 100%;
  }
`;

export const LeftWrapper = styled.aside`
  flex: 0.2;
  width: 100%;
  height: 330px;
  background: var(--yellow);
  border: 1px solid transparent;
  border-radius: 5px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;

  .search__wrapper {
    width: 100%;
    padding: 10px;

    h2 {
      padding: 8px 0;
    }
    .fields {
      width: 100%;
      margin-bottom: 10px;

      .datefield {
        width: 100%;
        margin: 10px 0;
        span {
          font-size: 0.8rem;
          margin-left: 3px;
        }
      }
      .date {
        width: 100%;

        .ant-picker {
          width: 100%;
          padding: 8px;
          border: none;
        }
      }
      .selectField {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 5px;
        .select {
          width: 100%;
          margin-top: 10px;
          .ant-select {
            width: 100%;
            .ant-select-selector {
              padding: 15px;
              border: none;
            }
          }
        }
      }
      button {
        width: 100%;
        margin: 10px 0;
        padding: 15px;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
`;
export const FilterBox = styled.div``;
export const RightWrapper = styled.div`
  width: 100%;
  flex: 1;
  margin-left: 20px;

  .room {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 5px;
    height: 250px;
    margin: 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .heading {
    padding: 15px 0 0 0;
  }
  .sort {
    width: 100%;
    background: #fff;
    display: flex;
    border: 1px solid var(--blue);
    border-radius: 3px;

    .link {
      font-weight: 400;
      padding: 10px 12px;
      border-right: 1px solid var(--blue);
      a {
        color: var(--blue);
      }
      font-size: 12px;
      &:hover {
        background: var(--blue);
        a {
          color: #fff;
        }
      }
    }
  }
`;

export const RoomWrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    width: 100%;
    .room__left {
      width: 100%;
      height: 220px;
      flex: 0.25;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .room__center {
      flex: 0.6;
      margin: 10px 20px;
      .room__title {
        a {
          margin-left: -8px;
        }
      }
      .room__features {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .feature {
          align-items: center;
          color: var(--blue);
          font-size: 12px;
          display: flex;
          margin: 2px 5px;
          .icon {
            display: flex;
            margin-right: 8px;
          }
        }
      }
    }
    .room__right {
      flex: 0.15;

      .room__right__container {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .rating {
          display: flex;
          align-items: center;
          position: relative;
          top: 5px;
        }
        .rating__count {
          background: var(--blue);
          padding: 3px;
          border-radius: 8px 0px;
          margin-left: 10px;
          display: flex;
          color: #fff;
        }
      }
    }
  }
`;
