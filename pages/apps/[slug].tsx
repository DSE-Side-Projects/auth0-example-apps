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

  const { title, screenshot, description } = data.app;

  return (
    <>
      <Nav />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-orange tracking-wide uppercase">
              Frontend
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <div className="max-w-xl my-10 mx-auto text-xl text-gray-500">
              <PortableText blocks={description} />
            </div>
          </div>
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <Image
                className="h-48 w-full object-cover"
                src={screenshot.image.asset.url}
                loading="lazy"
                width={1200}
                height={800}
                alt=""
              />
            </div>
          </div>
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
