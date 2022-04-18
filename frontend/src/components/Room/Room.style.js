import styled from 'styled-components';
export const Room = styled.div`
  width: 100%;
  display: flex;
  min-height: 300px;
  margin-bottom: 30px;
`;
export const RoomImage = styled.div`
  flex: 0.4;
  width: 100%;

  img,
  .ant-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
export const RoomInfo = styled.div`
  flex: 0.6;
  width: 100%;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  .roomName {
    padding-top: 20px;
    h2 {
      margin-bottom: 0;
    }
  }
  .roomFeatures {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .left {
      flex: 0.7;
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .info {
        flex: 0 0 33%;
        margin: 10px 0;
        display: flex;
        align-items: center;

        .icon {
          display: flex;
          .i {
            font-weight: 800 !important;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        .text {
          font-weight: 400;
          color: rgba(0, 0, 0, 0.5);
          margin-left: 5px;
          font-size: 0.85rem;
        }
      }
    }
    .right {
      flex: 0.3;
      width: 100%;

      .price {
      }
      .discount {
        h2 {
          color: #ccc;
          margin-top: -10px;
        }
      }
    }
  }
`;
