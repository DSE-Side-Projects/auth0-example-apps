import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mt-6 mx-auto max-w-7xl py-12 px-4 sm:mt-6 sm:px-6 lg:mt-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Work in Progress
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900 leading-snag">
                Identity is complex. Supporting identity{' '}
                <span className="block text-orange">
                  is even <abbr title="Words are hard 🤷‍♂️">complexer</abbr>
                </span>
              </span>
            </span>
          </h1>
          <p className="mt-3 xl:leading-relaxed text-gray-800 sm:mt-5 md:text-2xl sm:text-10xl xs:text-10xl lg:text-xl xl:text-xl">
            This site is a collection of tools, examples, pre-built source code,
            compiled apps and Auth0 tenant settings. It aims to help Auth0
            Developer Support Engineers to streamline debugging, troubleshooting
            and reproducing issues in a variety of environments, languages,
            frameworks and platforms.
          </p>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-3xl lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg lg:max-w-lg">
            <Image
              className="w-full object-contain sm:ml-10"
              src="/dashboard.png"
              layout="intrinsic"
              loading="eager"
              width={800}
              height={600}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
