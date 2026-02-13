import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/bgImg.png";
import realtorImg from "../assets/images/homebg2Img.png";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
      className="bg-cover bg-center relative h-screen overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-black/60 opacity-30"></div>
      <div
        className="md:flex-row z-10 flex flex-col 
       px-6 gap-6"
      >
        <div className="flex flex-col gap-4 mt-4">
          <h1
            className="text-5xl mt-10 sm:text-4xl lg:text-6xl 
          md:text-5xl bg-gradient-to-bl
         from-green-300  to-green-900 bg-clip-text 
        text-transparent line-clamp-2 my-2 
        md:text-green-900 lg:text-white/100
     font-bold"
          >
            Find Your <span className="lg:text-green-800"> Dream Home</span>
          </h1>
          <p
            className="
    text-xl md:text-4xl text-white
    bg-green-600/10
    p-3 rounded-lg
    font-semibold
    backdrop-blur-[2px]
     w-full md:w-[500px] lg:w-[600px]
     leading-snug
     lg:bg-transparent
  "
          >
            Discover the Best Properties in Akure for Rent.
          </p>
        </div>

        <div className="">
          <button
            className="absolute bottom-8 left-12 xs:left-[4.3rem] text-xl z-10 md:w-80 md:right-0 md:left-36
            translate-x-1/4 px-10 py-3 mt-10 text-white bg-green-700 rounded
        cursor-pointer hover:bg-green-500  md:text-2xl lg:left-80 xl:left-96
        transition-colors duration-300"
            onClick={() => navigate("/home")}
          >
            Get Started
          </button>
          <img
            src={realtorImg}
            className="absolute bottom-0 md:-bottom-8 right-0 w-3/4
           sm:w-1/2 md:w-2/3  lg:w-1/3 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
