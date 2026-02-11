import { useState, useEffect } from "react";
import { properties } from "../../data";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PropertySection = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [hasSearched, setHasSearched] = useState(false);

  const location = useLocation();
  const filters = location.state;

  useEffect(() => {
    if (filters) {
      setHasSearched(true);
    }
  }, [filters]);

  const filteredProperties = properties.filter((property) => {
    if (!filters) return true;

    const matchesLocation =
      !filters.location || property.location === filters.location;

    const matchesType = !filters.type || property.houseType === filters.type;

    const matchesPrice = (() => {
      if (!filters.price) return true;

      const [min, max] = filters.price.split("-").map(Number);

      return property.price >= min && property.price <= max;
    })();

    return matchesLocation && matchesType && matchesPrice;
  });

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
          {hasSearched &&
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="grid border-2 my-5 rounded-t-xl overflow-hidden gap-10"
              >
                <img
                  src={property.images[0]}
                  className="w-72 md:w-[750px]"
                  alt="image of a house compound"
                />
                <div className="px-3">
                  <h3 className="text-xl font-bold my-2">{property.title}</h3>
                  <p className="text-green-900 font-bold text-lg">
                    N{property.price}
                    <span className="text-black font-normal"> per year</span>
                  </p>
                  <span>{property.summary}</span>
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
          {!hasSearched && (
            <p className="text-center text-gray-500 mt-10">
              Please use the search filters to find properties.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;

//               />
//               <div className="px-3">
//                 <h3 className="text-xl font-bold my-2">{content.houseType}</h3>
//                 <p className="text-green-900 font-bold text-lg">
//                   {content.price}
//                   <span className="text-black font-normal"> per year</span>
//                 </p>
//                 <span>{content.summary}</span> */}
//                 <button
//                   onClick={handleLoading}
//                   disabled={loading}
//                   className={`w-full py-2 mt-4 rounded-md text-white
//                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-900"}`}
//                 >
//                   {loading ? "Loading..." : "View Details"}
//                 </button>
//                 <p className="my-1 text-sm text-center">
//                   ✅ No Payment before Inspection
//                 </p>
//               </div>
//             </div>
//           {/* ))} */}
//         {/* </div> */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default PropertySection;
