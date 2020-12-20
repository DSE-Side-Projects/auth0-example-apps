import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import Footer from '../components/Footer';
import AppGrid from '../components/Apps/AppGrid';

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <AppGrid />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;
