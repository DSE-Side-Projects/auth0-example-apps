import AppCard from './AppCard';

function AppGrid({ apps }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-orange sm:text-4xl">
            Sample Auth0 Apps
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            These are configured, deployable example applications. Just deploy
            one you're troubleshooting and get digging right away.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {apps.map((app) => (
            <AppCard app={app} key={app.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppGrid;
