import { Breadcrumb, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Filter, Section, SideBar } from '../components';
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
                {isLoading ? <Skeleton /> : <h1>Room Category</h1>}
              </RightWrapper>
            </div>
          </RoomContent>
        </RoomContainer>
      </Section>
    </>
  );
};

export default CategoryScreen;
