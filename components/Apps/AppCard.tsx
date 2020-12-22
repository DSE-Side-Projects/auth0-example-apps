import Image from 'next/image';
import PortableText from '@sanity/block-content-to-react';
import Link from 'next/link';

function AppCard({ app }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="flex-shrink-0">
        <Link href={`/apps/${app.slug}`}>
          <a>
            <Image
              className="h-48 w-full object-cover"
              src={app.screenshot.image.asset.url}
              loading="lazy"
              width={600}
              height={400}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <Link href={`/category/${app.slug}`}>
              <a className="hover:underline">Frontend</a>
            </Link>
          </p>
          <Link href={`/apps/${app.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{app.title}</p>
              <p className="mt-3 text-base text-gray-500">
                <PortableText blocks={app.description} />
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center mx-auto w-full">
          <div className="flex-shrink-0 mr-2">
            <a href="#">
              <span className="sr-only">React</span>
              <Image
                className="h-6 w-6"
                src={app.deployLogo.logo.asset.url}
                loading="lazy"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </div>
          <div className="flex-shrink-0">
            {app.technology.languages.map((language) => {
              return (
                <a href="#" className="mr-2">
                  <span className="sr-only">React</span>
                  <Image
                    className="h-6 w-6"
                    src={language.logo.asset.url}
                    loading="lazy"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
