/* eslint-disable @next/next/no-img-element */
const Portfolio = () => {
  return (
    <div className="px-20 py-20">
      <div className="lg:relative w-full flex justify-center items-center">
        <div className="w-24 h-24 blur-sm  absolute bottom-0  animate-move right-10 opacity-70  rounded-full bg-info "></div>
      </div>
      <h1 className="text-center text-5xl font-bold text-info">PORTFOLIO</h1>

      <div className=" w-96 p-5 border-4 border-gradient ">
        <img
          className=""
          src="https://usmanarif.netlify.app/assets/images/portfolio/pic_1.png" // Replace with your image URL
          alt="Card Image"
        />
        <div className=" bg-gradient-to-br from-info via-success to-info w-full p-5  ">
          <h1 className="text-white text-2xl font-semibold"> Ecommerce</h1>
          <p className="text-white text-lg my-3  ">Web Design & Development</p>
          <button className="btn-info btn w-full uppercase text-success text-2xl">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
