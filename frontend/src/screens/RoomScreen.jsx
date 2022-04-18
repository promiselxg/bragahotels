import { Room, Search, Section } from '../components';
import { Typography } from '../GlobalStyle';
import { RoomResultWrapper, RoomWrapper } from '../styles/RoomScreen.style';

const RoomScreen = () => {
  return (
    <>
      <Section>
        <RoomWrapper>
          <div className="container">
            <Typography as="h2" fontSize="2rem" fontWeight="600">
              Take a look at our available Rooms &amp; Suits
            </Typography>
            <Typography as="p" fontSize="0.8rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              velit voluptas dignissimos assumenda, sit a, necessitatibus
              voluptatem perspiciatis inventore expedita illum itaque deserunt
              nisi! Hic laboriosam porro laudantium facilis dignissimos.
            </Typography>
          </div>
        </RoomWrapper>
        <Search />
        <RoomResultWrapper>
          <div className="container">
            <Room />
          </div>
        </RoomResultWrapper>
      </Section>
    </>
  );
};

export default RoomScreen;
