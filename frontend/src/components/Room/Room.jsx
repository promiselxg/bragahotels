import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FiCheckCircle } from 'react-icons/fi';
import { Typography } from '../../GlobalStyle';
import { Button, Image } from '../index';
import { Links } from '../NavAnchor';
import { RoomWrapper } from './Room.style';
import { getRooms } from '../../redux/room/roomSlice';
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';

const Room = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading } = useSelector((state) => state.listRooms);
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        rooms.data.map((room, i) => (
          <div className="room" key={i}>
            <RoomWrapper>
              <div className="container">
                <div className="room__left">
                  <Link to={`/room/${room.roomid}`}>
                    <Image img={room.thumbnail} alt={room.title} />
                  </Link>
                </div>
                <div className="room__center">
                  <div className="room__title">
                    <Typography as="h2" fontSize="1.2rem" fontWeight="600">
                      <Links to={`/room/${room.roomid}`} label={room.title} />
                    </Typography>
                  </div>
                  <div className="room__details">
                    <Typography as="p" fontSize="0.8rem">
                      {room.description}
                    </Typography>
                    <div className="room__features">
                      {room.roomFeatures.split(',').map((item, i) => (
                        <div className="feature" key={i}>
                          <span className="icon">
                            <FiCheckCircle />
                          </span>
                          <span className="name">{item}</span>
                        </div>
                      ))}
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
                  <Link to={`/room/${room.roomid}/reserve`}>
                    <Button
                      bg="var(--blue)"
                      color="#fff"
                      label="Reserve Room"
                    />
                  </Link>
                </div>
              </div>
            </RoomWrapper>
          </div>
        ))
      )}
    </>
  );
};

export default Room;
