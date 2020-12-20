import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import Footer from '../components/Footer';
import AppGrid from '../components/Apps/AppGrid';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>DSE Sample Apps</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png"></link>
      </Head>
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
