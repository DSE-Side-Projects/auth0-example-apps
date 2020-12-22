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
      <article>
        <h2>{title}</h2>
        <figure>
          <img src={urlFor(screenshot).url()} />
        </figure>
        <PortableText blocks={description} />
        <aside></aside>
      </article>
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
