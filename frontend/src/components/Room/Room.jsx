import React, { useState } from 'react';
import { Typography } from '../../GlobalStyle';
import { Room, RoomImage, RoomInfo } from './Room.style';
import { Image, Rate } from 'antd';
import { Button } from '../../components';
import { FiCheck } from 'react-icons/fi';
import { Links } from '../NavAnchor';

const RoomList = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Room>
        <RoomImage>
          <Image
            preview={{ visible: false }}
            src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            onClick={() => setVisible(true)}
          />
          <div style={{ display: 'none' }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
            </Image.PreviewGroup>
          </div>
        </RoomImage>
        <RoomInfo>
          <div className="roomName">
            <Typography as="h2" fontSize="2rem" fontWeight="800">
              <Links url={`/room/1`} label="Presidential Lounge" />
            </Typography>
            <Rate disabled defaultValue={2} />
          </div>
          <div className="roomFeatures">
            <div className="left">
              <div className="info">
                <div className="icon">
                  <FiCheck className="i" />
                </div>
                <div className="text">Air conditioned</div>
              </div>
              <div className="info">
                <div className="icon">
                  <FiCheck className="i" />
                </div>
                <div className="text">Air conditioned</div>
              </div>
              <div className="info">
                <div className="icon">
                  <FiCheck className="i" />
                </div>
                <div className="text">Air conditioned</div>
              </div>
              <div className="info">
                <div className="icon">
                  <FiCheck className="i" />
                </div>
                <div className="text">Air conditioned</div>
              </div>
            </div>
            <div className="right">
              <div className="price">
                <Typography as="h2" fontSize="1.3rem" fontWeight="600">
                  &#8358;18,500/night
                </Typography>
              </div>
              <div className="discount">
                <Typography as="h2" fontSize=".8rem" fontWeight="600">
                  <s>&#8358;25,400</s>
                </Typography>
              </div>
              <Button label="Book room" bg="var(--yellow)" />
            </div>
          </div>
        </RoomInfo>
      </Room>
    </>
  );
};

export default RoomList;
