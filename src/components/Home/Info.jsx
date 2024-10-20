import Image from "next/image";

const Info = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center w-full max-w-3xl p-4 md:px-16">
        {/* Visible on larger screens */}
        <div className="hidden sm:block w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Allenki Akshay</h1>
              <h4 className="text-lg font-normal">Full Stack Developer</h4>
            </div>
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="text-lg font-normal w-[500px] text-justify">
            I am a full stack developer with experience in building web
            applications using React, Node, Express, and MongoDB.
          </p>
        </div>

        {/* Visible on smaller screens */}
        <div className="block sm:hidden w-full h-auto p-4">
          <div className="flex flex-col gap-4">
            <div className="w-[120px] h-[120px] relative">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Allenki Akshay</h1>
              <h4 className="text-sm font-normal">Full Stack Developer</h4>
            </div>
            <p className="text-sm font-normal text-justify">
              I am a full stack developer with experience in building web
              applications using React, Node, Express, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
