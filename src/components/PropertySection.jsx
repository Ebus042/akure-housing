import { useState } from "react";
import { homeImages } from "../../data";
import { useNavigate } from "react-router-dom";

const PropertySection = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      navigate("/property");
    }, 2000);
  }
  return (
    <section>
      <div className="mx-10 my-10 md:text-center">
        <h2 className="text-2xl font-bold my-2">Houses for Rent in Akure</h2>
        <p>Browse the best rental properties in town</p>
      </div>

      <div className="md:grid">
        <div className="mx-auto w-72 grid md:grid-cols-2 md:w-[750px] md:gap-10">
          {homeImages.map((content) => (
            <div
              key={content.id}
              className="grid border-2 my-5 rounded-t-xl overflow-hidden gap-10"
            >
              <img
                src={content.image1}
                className="w-72 md:w-[750px]"
                alt="image of a house compound"
              />
              <div className="px-3">
                <h3 className="text-xl font-bold my-2">{content.houseType}</h3>
                <p className="text-green-900 font-bold text-lg">
                  {content.price}
                  <span className="text-black font-normal"> per year</span>
                </p>
                <span>{content.summary}</span>
                <button
                  onClick={handleLoading}
                  disabled={loading}
                  className={`w-full py-2 mt-4 rounded-md text-white
                   ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-900"}`}
                >
                  {loading ? "Loading..." : "View Details"}
                </button>
                <p className="my-1 text-sm text-center">
                  ✅ No Payment before Inspection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
