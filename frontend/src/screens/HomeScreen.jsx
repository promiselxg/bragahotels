import { Category, HeroSection, Search } from '../components';
import AboutSection from '../sections/About/About';

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <AboutSection />
      <Category />
    </>
  );
};

export default HomeScreen;
