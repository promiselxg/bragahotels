import { Image } from 'antd';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Typography } from '../../GlobalStyle';
import Button from '../Button';
import { Links } from '../NavAnchor';
import { RoomWrapper } from './Room.style';

const Room = () => {
  return (
    <>
      <div className="room">
        <RoomWrapper>
          <div className="container">
            <div className="room__left">
              <Image
                img="https://images.unsplash.com/photo-1650173419393-a3d85d494399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="room__center">
              <div className="room__title">
                <Typography as="h2" fontSize="1.2rem" fontWeight="600">
                  <Links to="/" label="One King west Hotel and Residence" />
                </Typography>
              </div>
              <div className="room__details">
                <Typography as="p" fontSize="0.8rem">
                  Built in 1914, this downtown Toronto hotel blends historic
                  charm and elegance with modern conveniences. St. Lawrence
                  Market and the Hockey Hall of Fame are less than 10 minutes'
                  walk away.
                </Typography>
                <div className="room__features">
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                  <div className="feature">
                    <span className="icon">
                      <FiCheckCircle />
                    </span>
                    <span className="name">Air condition</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="room__right">
              <div className="room__right__container">
                <div className="rating">
                  <Typography as="p" fontSize="0.7rem">
                    500 reviews
                  </Typography>
                </div>
                <div className="rating__count">6.5</div>
              </div>
              <Button bg="#0071c2" label="Reserve Room" />
            </div>
          </div>
        </RoomWrapper>
      </div>
      ;
    </>
  );
};

export default Room;
