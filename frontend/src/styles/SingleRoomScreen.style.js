import styled from 'styled-components';

export const RoomWrapper = styled.div`
  width: 100%;
`;
export const RoomDisplayImage = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    .ant-image {
      width: 100%;
    }
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      background-position-x: -100px;
    }
  }
`;

export const RoomDetails = styled.div`
  padding: 80px 0;
`;
export const RoomHeading = styled.div`
  padding-bottom: 10px;
`;
export const RoomDesc = styled.div``;
