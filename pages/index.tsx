import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import Footer from '../components/Footer';
import AppGrid from '../components/Apps/AppGrid';
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity';

const HomePage = ({ apps }) => {
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
      <AppGrid apps={apps} />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const query = groq`
  *[_type == 'app']{
  title,
  github,
  quickstart,
  description,
    "screenshot": screenshot {
      image {
        asset->
      }	
    },
		"deployLogo": deploy -> {
      logo {
      asset->
    }
    },
      technology-> {
        title,
        docs,
        icon,
        languages[] -> {
          logo {
          asset->
        }
        },
        logo {
          asset ->
        },
        "slug": slug.current
      },
    "slug": slug.current}
    `;
  const apps = await getClient({ usePreview: false }).fetch(query);

  return {
    props: {
      apps,
    },
  };
}
