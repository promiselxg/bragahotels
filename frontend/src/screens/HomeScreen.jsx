import {
  Category,
  FeaturedRooms,
  HeroSection,
  Search,
  Services,
  About,
} from '../components';

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <About />
      <Category />
      <FeaturedRooms />
      <Services />
    </>
  );
};

export default HomeScreen;
