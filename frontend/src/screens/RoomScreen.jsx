import { Room, Section, SideBar } from '../components';
import { Breadcrumb } from 'antd';
import {
  FilterBox,
  LeftWrapper,
  RightWrapper,
  RoomContainer,
  RoomContent,
  RoomHeader,
} from '../components/Room/Room.style';
import { Links } from '../components/NavAnchor';
import { Typography } from '../GlobalStyle';
const RoomScreen = () => {
  return (
    <>
      <Section>
        <RoomContainer>
          <RoomHeader>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Links to="/" label="Home" />
              </Breadcrumb.Item>
            </Breadcrumb>
          </RoomHeader>
          <RoomContent>
            <div className="container">
              <LeftWrapper>
                <SideBar />
                <FilterBox></FilterBox>
              </LeftWrapper>
              <RightWrapper>
                <div className="heading">
                  <Typography as="h2" fontSize="1.2rem" fontWeight="600">
                    200 rooms found
                  </Typography>
                  <div className="sort">
                    <div className="link">
                      <Links to="/" label="Our top picks" />
                    </div>
                    <div className="link">
                      <Links to="/" label="Our top picks" />
                    </div>
                  </div>
                </div>
                <Room />
              </RightWrapper>
            </div>
          </RoomContent>
        </RoomContainer>
      </Section>
    </>
  );
};

export default RoomScreen;
