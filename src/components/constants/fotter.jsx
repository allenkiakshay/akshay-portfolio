
const Fotter = () => {
  return (
    <div className="relative flex justify-center items-center w-[100vw] h-auto p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="relative flex justify-between items-center lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] h-auto md:p-2 md:px-16">
        <div className="relative flex gap-4 items-start justify-between font-light md:font-normal w-full h-auto  border-t-2 p-8">
          <div className="relative flex flex-col justify-start items-start gap-4 w-1/3 text-gray-500">
            <a className="text-lg">Home</a>
            <a className="text-lg">Blog</a>
            <a className="text-lg">Projects</a>
          </div>
          <div className="relative flex flex-col justify-start items-start gap-4  w-1/3 text-gray-500">
            <a className="text-lg">Instagram</a>
            <a className="text-lg">Twitter</a>
            <a className="text-lg">LinkedIn</a>
            <a className="text-lg">GitHub</a>
          </div>
          <div className="relative flex flex-col justify-start items-start gap-4 w-1/3 text-gray-500">
            <a className="text-lg">+91 63017 03596</a>
            <a className="text-lg">allenkiakshay8322@gmail.com</a>
            <a
              href="https://www.buymeacoffee.com/allenkiakshay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: "60px", width: "217px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
