import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from '../../lib/sanity';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Image from 'next/image';

const appQuery = groq`
  *[_type == 'app' && slug.current == $slug][0]{
  title,
  github,
  url,
  quickstart,
  description,
  "screenshot": screenshot {
    image {
      asset->
    }	
  },
  github,
  deploy -> {
    title,
    deploymentUrl,
    button,
    logo {
    asset->
  }
  },
    technology-> {
      title,
      docs,
      quickstart,
      icon,
      languages[] -> {
        title,
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

export default function App({ data, preview = false }) {
  const router = useRouter();

  // if (!data) return null;

  if (!router.isFallback && !data.app?.slug) {
    console.error('ERROR');
    return <ErrorPage statusCode={404} />;
  }

  const { data: app } = usePreviewSubscription(appQuery, {
    params: { slug: data.app.slug },
    initialData: data,
    enabled: preview,
  });

  const {
    title,
    screenshot,
    description,
    technology,
    deploy,
    github,
    url
  } = data.app;

  return (
    <>
      <Nav user={null} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-orange tracking-wide uppercase">
              {['Vue', 'React', 'Angular'].includes(technology.title)
                ? 'Frontend'
                : ['Java Spring MVC', 'Swift', 'Objective-C'].includes(
                    technology.title
                  )
                ? 'Native'
                : 'Backend'}
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <div className="max-w-xl my-10 mx-auto text-xl text-gray-500">
              <PortableText blocks={description} />
            </div>
          </div>
            <div className="bg-white md:w-full lg:w-full xl:w-2/3 my-10 mx-auto shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  About this app
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Basic information about this application
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Framework
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {technology.title} (
                      <a
                        href={technology.docs}
                        className="text-orange hover:underline"
                      >
                        docs
                      </a>
                      )
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Github
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <a href={github}>
                        {github.split('/')[github.split('/').length - 1]}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Quickstart
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <a
                        href={technology.quickstart}
                        className="underline hover:text-orange"
                      >
                        Auth0 {technology.title} Quickstart
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Deployment
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <a href={`${deploy.deploymentUrl}${github}`}>
                        <img src={deploy.button} />
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 prose">
                      <PortableText blocks={description} />
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Downloads
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              Package
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="#"
                              className="font-medium text-orange hover:underline"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              Package
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="#"
                              className="font-medium text-orange hover:underline"
                            >
                              Download
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <a href={url} className="hover:shadow-2xl hover:border-orange"><Image
                  className="self-center w-full object-cover "
                  src={screenshot.image.asset.url}
                  loading="lazy"
                  layout="responsive"
                  width={1200}
                  height={900}
                  alt=""
                />
                </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const app = await getClient(preview).fetch(appQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { app },
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const paths = await getClient(preview).fetch(
    groq`*[_type == "app" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
