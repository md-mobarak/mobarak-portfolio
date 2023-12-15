import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { MdWeb } from "react-icons/md";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="services" id="services">
      <div className="px-20 py-20">
        <h1 className="text-info text-5xl text-center my-10 font-bold">
          Services{" "}
        </h1>
        <section className="flex justify-around my-10 space-x-12">
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <MdWeb className="text-4xl rounded-full h-16 w-16 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Web Design
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <CgWebsite className="text-4xl rounded-full h-16 w-16 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Web Application
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <DiResponsive className="text-4xl rounded-full h-20 w-20 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Responsive Design
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-around my-10 space-x-12">
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <MdWeb className="text-4xl rounded-full h-16 w-16 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Web Design
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <CgWebsite className="text-4xl rounded-full h-16 w-16 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Web Application
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="border card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white">
            <div className="flex items-center justify-center p-4">
              <DiResponsive className="text-4xl rounded-full h-20 w-20 text-info" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Responsive Design
              </h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Services;
