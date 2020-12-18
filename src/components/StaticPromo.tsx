import React from "react"
import shieldIcon from "../placeholders/icons/shield.svg"
import cloudToolsIcon from "../placeholders/icons/cloud-tools.svg"
import cartIcon from "../placeholders/icons/cart.svg"
import serverIcon from "../placeholders/icons/server.svg"
import maleAvatar from "../placeholders/pictures/male_avatar.svg"
import femaleAvatar from "../placeholders/pictures/female_avatar.svg"

const StaticPromo = () => {
  return (
    <>
      <section className="pt-12 pb-12 px-4">
        <h2 className="text-4xl text-center mb-12 leading-tight font-heading">
          Why Sample Apps?
        </h2>
        <div className="flex flex-wrap md:max-w-5xl -mx-6 md:mx-auto -mb-6 text-center">
          <div className="md:w-1/2 px-6 mb-6">
            <img className="mx-auto" src={shieldIcon} alt="" />
            <h3 className="text-xl my-2 font-heading">Set up and tested</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              These apps are cmpletely set up and tested for immediate
              deployment. Click a button and start troubleshooting in no time!
            </p>
          </div>
          <div className="md:w-1/2 px-6 mb-6">
            <img className="mx-auto" src={cloudToolsIcon} alt="" />
            <h3 className="text-xl my-2 font-heading">Play with settings</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Coupled with tenant settings, these apps offer a flexible and
              rapid debugging and troubleshooting in many sample environments.
            </p>
          </div>
          <div className="md:w-1/2 px-6 mb-6">
            <img className="mx-auto" src={cartIcon} alt="" />
            <h3 className="text-xl my- font-heading">Value-based price</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The best combination of quality and economy comes with our paper.
              The offer includes wides ranges of density.
            </p>
          </div>
          <div className="md:w-1/2 px-6 mb-6">
            <img className="mx-auto" src={serverIcon} alt="" />
            <h3 className="text-xl my-2 font-heading">Deployment-ready</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Apps are ready for deployment. They are set up for you to start
              working right away!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-4xl mb-2 leading-tight font-heading">
          Contributors
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-700">
          Your contributions are welcome!
        </p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-1/2 lg:w-1/4 p-4">
            <img
              className="w-1/3 mx-auto mb-4 rounded-full"
              src={maleAvatar}
              alt=""
            />
            <h3 className="text-xl font-heading font-semibold">
              Art Rosnovsky
            </h3>
            <span>
              Developer Support Engineer
              <br />
              <span className="text-orange-900 font-semibold">
                <a href="https://auth0.com">Auth0</a>
              </span>
            </span>
          </div>
          <div className="w-1/2 lg:w-1/4 p-4">
            <img
              className="w-1/3 mx-auto mb-4 rounded-full"
              src={femaleAvatar}
              alt=""
            />
            <h3 className="text-xl font-heading font-semibold">Ellen Conley</h3>
            <span>
              Developer Support Engineer
              <br />
              <span className="text-orange-900 font-semibold">
                <a href="https://auth0.com">Auth0</a>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 font-heading">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap justify-center -mx-8">
            {/* <div className="lg:w-1/2 px-8 mb-8"> */}
            <p className="text-center">Coming Soon</p>
            {/* <h3 className="text-lg mb-1 font-heading font-semibold">
                How does Dunder Mifflin paper differ from other products?
              </h3>
              <p>
                Paper produced with love, devotion, passion - is not the same
                paper. Our supplies are extra strong, and you’re going to need
                the paper-tear up-master to destroy just one sheet. It’s also
                suited for every available printer.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-heading font-semibold">
                When I will receive the products?
              </h3>
              <p>
                If you buy one of our business plans, you will receive the
                supplies every first Monday of the month. However, you can also
                purchase paper separately. Our employees will make sure that you
                will receive the products in the next business days.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-heading font-semibold">
                Why choose Dunder Mifflin instead of some huge paper producer?
              </h3>
              <p>
                You know that feeling when you are waiting on the phone for
                hours to contact your supplier? Sometimes they even have a
                waiting time music prepared for that. In Dunder Mifflin, you can
                get help immediately, and each of our customers receives an
                individual assistant.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-heading font-semibold">
                What makes Dunder Mifflin so special among other companies?
              </h3>
              <p>
                We’re dedicated to ensuring the highest level of customer
                satisfaction based on long-term professional relationships. By
                creating a positive working environment, we’re enabling our
                employees to significantly improve not only their productivity
                but what’s more important – job satisfaction.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-heading font-semibold">
                Do you offer bargains for regular clients?
              </h3>
              <p>
                Thank you for asking, great question! We highly value long-term
                relationships with our clients, and that’s why we regularly
                thank them for their trust by giving significant discounts.
                Moreover, we offer a 10% rebate for every new customer! For more
                information, please contact our HQ in Scranton.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-heading font-semibold">
                How long does it take to finalize the deal?
              </h3>
              <p>
                The whole process depends on your decision. If you sign the
                contract immediately, we can start official cooperation in the
                next two business days.
              </p>
            </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default StaticPromo
