import { Element } from "react-scroll";

/* eslint-disable @next/next/no-img-element */
const Portfolio = () => {
  return (
    <div className="px-20 py-20">
      <div className="lg:relative w-full flex justify-center items-center">
        <div className="w-24 h-24 blur-sm  absolute bottom-0  animate-move right-10 opacity-70  rounded-full bg-info "></div>
      </div>
      <h1 className="text-center text-5xl my-16 font-bold text-info">
        PORTFOLIO
      </h1>
      <Element name="portfolio" id="portfolio">
      <section className="grid grid-cols-3 space-x-5">
      <div className=" w-96  p-5 border-4 border-gradient ">
          <img
            className=""
            src="https://usmanarif.netlify.app/assets/images/portfolio/pic_1.png" // Replace with your image URL
            alt="Card Image"
          />
          <div className=" bg-gradient-to-br from-info via-success to-info w-full p-5  ">
            <h1 className="text-white text-2xl font-semibold"> Ecommerce</h1>
            <p className="text-white text-lg my-3  ">
              Web Design & Development
            </p>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-info w-full text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Preview
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
      <div className=" w-96  p-5 border-4 border-gradient ">
          <img
            className=""
            src="https://usmanarif.netlify.app/assets/images/portfolio/pic_1.png" // Replace with your image URL
            alt="Card Image"
          />
          <div className=" bg-gradient-to-br from-info via-success to-info w-full p-5  ">
            <h1 className="text-white text-2xl font-semibold"> Ecommerce</h1>
            <p className="text-white text-lg my-3  ">
              Web Design & Development
            </p>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-info w-full text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Preview
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
      <div className=" w-96  p-5 border-4 border-gradient ">
          <img
            className=""
            src="https://usmanarif.netlify.app/assets/images/portfolio/pic_1.png" // Replace with your image URL
            alt="Card Image"
          />
          <div className=" bg-gradient-to-br from-info via-success to-info w-full p-5  ">
            <h1 className="text-white text-2xl font-semibold"> Ecommerce</h1>
            <p className="text-white text-lg my-3  ">
              Web Design & Development
            </p>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-info w-full text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Preview
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </section>
      </Element>
    </div>
  );
};

export default Portfolio;
