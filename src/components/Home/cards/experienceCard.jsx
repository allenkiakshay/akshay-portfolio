const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  techStack,
  companyLogo,
}) => {
  return (
    <div className="border-2 rounded-lg shadow-lg m-4 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] flex flex-col md:flex-row p-4">
      {/* Left Side: Company Logo */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          src={companyLogo}
          alt={company}
          className="w-24 h-24 object-contain rounded-md"
        />
      </div>

      {/* Right Side: Experience Details */}
      <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">
            {company} | {duration}
          </p>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="font-semibold">Tech Stack: {techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
