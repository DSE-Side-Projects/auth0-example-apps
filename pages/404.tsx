import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Head from 'next/head';

const PageNotFound = ({statusCode}) => {
  return (
    <>
    <Head>
        <title>404, damn it! | DSE Sample Apps</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png"></link>
      </Head>
      <Nav user={null} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-orange font-mono tracking-wide uppercase mb-5">
              Error 404
            </h2>
            <p className="mt-1 text-4xl font-black font-mono text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl pb-5">
              Page Not Found
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Let's not point fingers, ok? Ok.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
