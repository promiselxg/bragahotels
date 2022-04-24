import { Breadcrumb, Rate, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Filter, Image, Section, SideBar } from '../components';
import { Links } from '../components/NavAnchor';
import {
  LeftWrapper,
  RightWrapper,
  RoomContainer,
  RoomContent,
  RoomHeader,
} from '../components/Room/Room.style';
import { Typography } from '../GlobalStyle';
import { getRoomByCategory } from '../redux/room/roomCategorySlice';
import { setSuccess } from '../redux/room/roomSlice';
import {
  RoomCard,
  RoomCardBody,
  RoomCardImg,
  RoomCardWrapper,
} from '../styles/CategoryScreen.style';
import { FilterBox } from '../styles/Filter.style';

const CategoryScreen = () => {
  const { isLoading, rooms } = useSelector((state) => state.roomCategory);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomByCategory(params));
    dispatch(setSuccess());
  }, [dispatch, params]);

  return (
    <>
      <Section>
        <RoomContainer>
          <RoomHeader>
            <Breadcrumb>
              <Breadcrumb.Item className="seperator">
                <Links to="/" label="Home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <Links to="/rooms" label="Rooms" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <Links
                  to={`/rooms/${params.category}`}
                  label={params.category}
                />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <i>{params.category} room listing</i>
              </Breadcrumb.Item>
            </Breadcrumb>
          </RoomHeader>
          <RoomContent>
            <div className="container">
              <LeftWrapper>
                <FilterBox className="filterBox">
                  <SideBar />
                </FilterBox>
                <FilterBox>
                  <Filter />
                </FilterBox>
              </LeftWrapper>
              <RightWrapper>
                <div className="heading">
                  <Typography
                    as="h2"
                    fontSize="1.2rem"
                    fontWeight="600"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {params.category} Rooms Category Listing (
                    {rooms.data ? rooms.data.length : 0})
                  </Typography>
                </div>
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <>
                    <RoomCardWrapper>
                      {rooms?.data?.map((room) => (
                        <Link to={`/room/${room.roomid}`} key={room.roomid}>
                          <RoomCard>
                            <div className="container">
                              <RoomCardImg>
                                <Image img={room.thumbnail} alt={room.title} />
                              </RoomCardImg>
                              <RoomCardBody>
                                <div className="room__name">
                                  <Typography
                                    as="h2"
                                    fontSize="0.75rem"
                                    lineHeight="0.9rem"
                                    color="rgba(0,0,0,0.7)"
                                  >
                                    {room.title}
                                  </Typography>
                                  <div className="rating">
                                    <Rate defaultValue={4.5} disabled />
                                  </div>
                                </div>
                                <div className="room__price">
                                  {!room.discount ? (
                                    <>
                                      <div className="price">
                                        &#8358;
                                        <NumberFormat
                                          displayType={'text'}
                                          value={room.price}
                                          thousandSeparator={true}
                                        />
                                        /night
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="price">
                                        &#8358;
                                        <NumberFormat
                                          displayType={'text'}
                                          value={room?.discountPrice || 10000}
                                          thousandSeparator={true}
                                        />
                                        /night
                                      </div>
                                      <div className="discount">
                                        <s>
                                          &#8358;
                                          <NumberFormat
                                            displayType={'text'}
                                            value={room.price}
                                            thousandSeparator={true}
                                          />
                                        </s>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="room__btn">
                                  <Button
                                    bg="#000"
                                    color="#fff"
                                    label="Book now"
                                    hoverBg="var(--yellow)"
                                    hoverColor="#000"
                                  />
                                </div>
                              </RoomCardBody>
                            </div>
                          </RoomCard>
                        </Link>
                      ))}
                    </RoomCardWrapper>
                  </>
                )}
              </RightWrapper>
            </div>
          </RoomContent>
        </RoomContainer>
      </Section>
    </>
  );
};

export default CategoryScreen;
