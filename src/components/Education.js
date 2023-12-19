const Education = () => {
  return (
    <div className="bg-success lg:px-20 px-10 lg:py-20 py-10 font-serif">
      <h1 className="lg:text-5xl text-3xl text-center lg:text-start text-info font-bold my-10 uppercase">
        Education
      </h1>
      <section className="lg:flex w-full">
        <div className="lg:relative lg:w-1/2  py-8 " data-aos="fade-right">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-8 h-8  lg:absolute hidden lg:block   top-[-20px] right-[-52px]  rounded-full bg-info "
          ></div>
          <div className=" bg-gradient-to-b from-info to-gray-200 p-6 rounded-md shadow-md">
            <div className="text-2xl font-bold mb-4">2019-2023</div>
            <div className="text-lg font-semibold mb-4">Your College Name</div>
            <div className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div className="lg:relative bg-info hidden lg:block w-2  mx-8  border border-info  "></div>
        <div className="lg:relative w-1/2  hidden lg:block"></div>
      </section>
      <section className="lg:flex w-full ">
        <div className="lg:relative hidden lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div className="w-32 h-32 blur-sm hidden lg:block  absolute bottom-0  animate-move left-10 opacity-70  rounded-xl bg-info "></div>
        </div>
        <div className="lg:relative bg-info w-2 hidden lg:block  mx-8 border border-info "></div>

        <div className="lg:relative lg:w-1/2 py-8 " data-aos="fade-right">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-10 h-10  lg:absolute hidden lg:block   top-0 lg:left-[-55px]  rounded-full bg-info "
          ></div>
          <div className=" bg-gradient-to-b from-info to-gray-200 p-6 rounded-md shadow-md">
            <div className="text-2xl font-bold mb-4">2019-2023</div>

            <div className="text-lg font-semibold mb-4">Your College Name</div>

            <div className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </section>
      <section className="lg:flex w-full">
        <div className="lg:relative lg:w-1/2  py-8 " data-aos="fade-right">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-8 h-8 lg:absolute hidden lg:block   top-[-20px]  right-[-52px]  rounded-full bg-info "
          ></div>
          <div className=" bg-gradient-to-b from-info to-gray-200 p-6 rounded-md shadow-md">
            <div className="text-2xl font-bold mb-4">2019-2023</div>

            <div className="text-lg font-semibold mb-4">Your College Name</div>

            <div className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div className="lg:relative hidden lg:block bg-info w-2  mx-8  border border-info  "></div>
        <div className="lg:relative hidden lg:block lg:w-1/2 "></div>
      </section>
    </div>
  );
};

export default Education;
