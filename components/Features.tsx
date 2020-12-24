const Features = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Sample Apps?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex">
            <svg
              className="flex-shrink-0 h-6 w-6 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Set up and tested
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                These apps are cmpletely set up and tested for immediate
                deployment. Click a button and start troubleshooting in no time!
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="flex-shrink-0 h-6 w-6 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Play with settings
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Coupled with tenant settings, these apps offer a flexible and
                rapid debugging and troubleshooting in many sample environments.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="flex-shrink-0 h-6 w-6 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Deployment-ready
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Apps are ready for deployment. They are set up for you to start
                working right away!
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="flex-shrink-0 h-6 w-6 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Extra tools
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Extra tools available to Auth0 DSEs, from Rules troubleshooting
                to request logging.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default Features;
