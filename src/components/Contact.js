import Map from "./Map";

const Contact = () => {
  return (
    <div className=" p-20 ">
      <h1 className="text-center text-5xl mb-10 font-bold text-info">
        Contact
      </h1>

      <div className="flex justify-between items-center p-16  bg-gradient-to-b from-info via-gray-800 to-success">
        <div className="bg-opacity-30 w-1/2 bg-white p-8 rounded-md shadow-md backdrop-filter backdrop-blur-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-800 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-800 font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-800 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-info btn text-white w-full px-4 py-2 rounded-md  transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
        <Map></Map>
      </div>
      </div>

  
    </div>
  );
};

export default Contact;
