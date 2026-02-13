import { useState, useEffect } from "react";
import { properties } from "../../data";
import { useNavigate, useSearchParams } from "react-router-dom";

const PropertySection = () => {
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (locationParam && typeParam && priceParam) {
      navigate("/home", { replace: true });
    }
  }, []);

  const locationParam = searchParams.get("location");
  const typeParam = searchParams.get("type");
  const priceParam = searchParams.get("price");

  // If page opened without filters
  if (!locationParam || !typeParam || !priceParam) {
    return (
      <section>
        <div className="mx-10 my-10 md:text-center">
          <h2 className="text-2xl font-bold my-2">Houses for Rent in Akure</h2>
          <p>Please select location, house type and price range.</p>
        </div>
      </section>
    );
  }

  // const filteredProperties = properties.filter((property) => {
  //   if (locationParam && property.location !== locationParam) return false;
  //   if (typeParam && property.houseType !== typeParam) return false;

  //   if (priceParam) {
  //     const [min, max] = priceParam.split("-").map(Number);
  //     if (property.price < min || property.price > max) return false;
  //   }

  //   return true;
  // });

  const [min, max] = priceParam.split("-").map(Number);

  const filteredProperties = properties.filter((property) => {
    return (
      property.location === locationParam &&
      property.houseType === typeParam &&
      property.price >= min &&
      property.price <= max
    );
  });

  function handleLoading(id) {
    setLoadingId(id);
    setTimeout(() => {
      navigate(`/property/${id}`);
    }, 800);
  }

  return (
    <section>
      <div className="mx-10 my-10 md:text-center">
        <h2 className="text-2xl font-bold my-2">Houses for Rent in Akure</h2>
        <p>Browse the best rental properties in town</p>
      </div>

      <div className="md:grid">
        <div className="mx-auto w-72 grid md:grid-cols-2 md:w-[750px] md:gap-10">
          {filteredProperties.length > 0 &&
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="grid border-2 my-5 rounded-t-xl overflow-hidden gap-6"
              >
                <img
                  src={property.images[0]}
                  className="w-full aspect-[4/3] object-cover"
                  alt="House"
                />

                <div className="px-3 pb-4">
                  <h3 className="text-xl font-bold my-2">{property.title}</h3>

                  <p className="text-green-900 font-bold text-lg">
                    ₦{property.price.toLocaleString()}
                    <span className="text-black font-normal"> per year</span>
                  </p>

                  <p className="my-2 text-sm">{property.summary}</p>

                  <button
                    onClick={() => handleLoading(property.id)}
                    disabled={loadingId === property.id}
                    className={`w-full py-2 mt-4 rounded-md text-white transition
                      ${
                        loadingId === property.id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-900 hover:bg-green-800"
                      }`}
                  >
                    {loadingId === property.id ? "Loading..." : "View Details"}
                  </button>

                  <p className="my-2 text-sm text-center">
                    ✅ No Payment before Inspection
                  </p>
                </div>
              </div>
            ))}

          {filteredProperties.length === 0 && (
            <p className="text-center text-red-500 mt-10 col-span-full">
              No {typeParam || "properties"} available
              {locationParam && ` in ${locationParam}`}
              {priceParam && " within this price range"}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
