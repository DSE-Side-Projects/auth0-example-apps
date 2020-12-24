import Nav from '../components/Nav';
import Footer from '../components/Footer';
import auth0 from '../utils/auth0';
import Head from 'next/head';


const Dashboard = ({user}) => {
  return (
    <>
    <Head>
        <title>Dashboard | DSE Sample Apps</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png"></link>
      </Head>
      <Nav user={user} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-orange font-mono tracking-wide uppercase mb-5">
              {user.name}
            </h2>
            <p className="mt-1 text-4xl font-black font-mono text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl pb-5">
              {user.email}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            <small>
                    <a
                      href={`https://duckduckgo.com/?q=map+${user["https://example.com/geoip"].latitude}%2C+${user["https://example.com/geoip"].longitude}&t=ffab&atb=v199-1&ia=web&iaxm=maps`}
                    >
                      {user["https://example.com/geoip"].city_name},{" "}
                      {user["https://example.com/geoip"].country_name}
                    </a>
                  </small>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(context.req);
    if (!session || !session.user) {
      context.res.writeHead(302, {
        Location: '/api/login'
      });
      context.res.end();
      return null;
    }
    
    return {
      props: {
        user: session?.user || null
      }
    }
  }
  return {
    props: {
      user: null
    }
  }

}
