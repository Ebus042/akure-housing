import { moreImages } from "../../../data";
import { ChevronRight, CirclePlus, LocateIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PropertySelected = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      navigate("/book-inspection");
    }, 1000);
  }
  return (
    <section className="mx-5">
      <div className="my-10">
        <h2 className="text-xl font-bold my-2">
          3 Bedroom Apartment in Alagbaka
        </h2>
        <p className="text-green-900 font-bold text-lg mb-5">
          N1,000,000 <span className="font-normal text-black">per year</span>
        </p>
        {moreImages.map((image, index) => (
          <div
            key={image.id}
            className="relative my-1 w-80 mx-auto
           rounded-lg"
          >
            <img src={image.image5} className="block object-cover" alt="" />

            {index === 0 && (
              <p
                className="absolute top-2 left-2 bg-green-900
               text-white px-3 py-1 rounded text-sm"
              >
                ✅ Alagbaka, Akure
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center gap-1 my-2 text-xl">
          <LocateIcon className="h-6 w-6 mx-1 text-green-900" />
          <p>Alagbaka, Akure</p>
        </div>
        <div className="flex items-center gap-1">
          <CirclePlus className="h-6 w-6 mx-1 text-green-900" />
          <div className="">
            <p className="font-bold text-xl text-green-900">Facilities:</p>
          </div>
        </div>
        <p className="">Parking space, kitchen cabinets, water supply.</p>
        <div>
          <h4 className="font-bold text-xl text-green-900 mt-10">
            Description
          </h4>
          <p className="text-sm mt-2">
            Spacious 3 bedroom apartment in a serene neigbhorhood, perfect for
            families.
          </p>
        </div>
        {moreImages.map((image) => (
          <div key={image.id} className="my-6">
            <img src={image.image6} alt="" />
            <img src={image.image7} alt="" />
            <img src={image.image8} alt="" />
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleLoading}
          disabled={loading}
          className={`w-full py-2 mt-4 rounded-md text-white
                   ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-900"}`}
        >
          {loading ? "Loading..." : "Book Inspection"}
          <ChevronRight className="w-5 h-5 text-white inline-block mx-2" />
        </button>
      </div>
    </section>
  );
};

export default PropertySelected;
