import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/bgImg.png";
import realtorImg from "../assets/images/startImg.png";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const StartPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  function loadingHandler() {
    setLoading(true);
    setClicked(true);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  }

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
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl mt-10 sm:text-4xl lg:text-6xl 
          md:text-5xl text-white my-2 
        md:text-green-900 lg:text-white/100
     font-bold"
          >
            Find Your <span className="lg:text-green-800"> Dream Home</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
    text-xl md:text-4xl text-white
    bg-green-600/20
    p-3 rounded-lg
    font-semibold
    backdrop-blur-[2px]
     w-full md:w-[500px] lg:w-[600px]
     leading-snug
     lg:bg-transparent
  "
          >
            Discover the Best Properties in Akure for Rent.
          </motion.p>
        </div>

        <div className="">
          <motion.button
            animate={!clicked ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
            transition={
              !clicked
                ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 1 }
            }
            // whileHover={{ scale: 1.05 }}
            className="absolute bottom-8 left-12 xs:left-[4.3rem] text-xl z-10 md:w-80 md:right-0 md:left-36
            translate-x-1/4 px-10 py-3 mt-10 text-white bg-green-500 rounded
        cursor-pointer hover:bg-green-500 transition-colors duration-300 md:text-2xl lg:left-80 xl:left-96"
            onClick={loadingHandler}
          >
            Get Started
          </motion.button>
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
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
