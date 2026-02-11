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
        <h2 className="text-xl font-bold my-2 md:text-3xl">
          3 Bedroom Apartment in Alagbaka
        </h2>
        <p className="text-green-900 font-bold text-lg md:text-xl mb-5">
          N1,000,000 <span className="font-normal text-black">per year</span>
        </p>
        <div className="md:flex md:gap-10">
          {/* LEFT SIDE — Image */}
          <div className="md:flex-1">
            {moreImages.map((image, index) =>
              index === 0 ? (
                <div
                  key={image.id}
                  className="relative w-full rounded-lg overflow-hidden"
                >
                  <img
                    src={image.image5}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <p className="absolute top-2 left-2 bg-green-900 text-white px-3 py-1 rounded text-sm">
                    ✅ Alagbaka, Akure
                  </p>
                </div>
              ) : null,
            )}
          </div>

          {/* RIGHT SIDE — Text Content */}
          <div className="md:flex-1 mt-4 md:mt-0">
            <div className="flex items-center gap-1 my-2 text-xl">
              <LocateIcon className="h-6 w-6 text-green-900" />
              <p>Alagbaka, Akure</p>
            </div>

            <div className="flex items-center gap-1">
              <CirclePlus className="h-6 w-6 text-green-900" />
              <p className="font-bold text-xl text-green-900">Facilities:</p>
            </div>

            <p>Parking space, kitchen cabinets, water supply.</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl md:text-2xl text-green-900 mt-10">
            Description
          </h4>
          <p className="text-sm my-2 md:my-4 md:text-lg">
            Spacious 3 bedroom apartment in a serene neigbhorhood, perfect for
            families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {moreImages
            .filter((image) => image.id !== 0)
            .map((image) => (
              <div key={image.id}>
                <img
                  src={Object.values(image).find(
                    (val) => typeof val === "string",
                  )}
                  className="w-full rounded-lg object-cover"
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
      <div>
        <button
          onClick={handleLoading}
          disabled={loading}
          className={`w-full py-2 mt-4 rounded-md md:w-80 text-white mx-auto block text-lg font-bold border-2
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
