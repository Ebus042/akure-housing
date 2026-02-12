import { useState } from "react";
import { properties } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";

const PropertySection = () => {
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Filters passed from SearchSection
  const filters = location.state;

  // 🔹 If page is refreshed or opened directly without filters
  if (!filters) {
    return (
      <section>
        <div className="mx-10 my-10 md:text-center">
          <h2 className="text-2xl font-bold my-2">Houses for Rent in Akure</h2>
          <p>Browse the best rental properties in town</p>
        </div>

        <p className="text-center text-gray-500 mt-10">
          Please use the search filters above to find properties.
        </p>
      </section>
    );
  }

  // 🔹 Filter Logic (ALL filters required)
  const filteredProperties = properties.filter((property) => {
    if (property.location !== filters.location) return false;
    if (property.houseType !== filters.type) return false;

    const [min, max] = filters.price.split("-").map(Number);

    if (property.price < min || property.price > max) {
      return false;
    }

    return true;
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
          {/* 🔹 If results found */}
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

          {/* 🔹 No results found */}
          {filteredProperties.length === 0 && (
            <p className="text-center text-red-500 mt-10 col-span-full">
              No {filters.type} available in {filters.location} within this
              price range.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
