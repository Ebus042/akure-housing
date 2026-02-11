import { useState } from "react";
import { properties } from "../../data";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  // const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedType, setSelectedType] = useState("");
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/", {
      state: {
        location: selectedLocation,
        type: selectedType,
        price: selectedPriceRange,
      },
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setSelectedLocation("");
    setSelectedPriceRange("");
    setSelectedType("");
  };

  const filteredProperties = properties.filter((property) => {
    if (filter === "location") {
      return property.location === selectedLocation;
    }
    if (filter === "price") {
      return property.price === selectedPriceRange;
    }
    if (filter === "type") {
      return property.houseType === selectedType;
    }
    return true;
  });
  return (
    <section>
      <h1 className="text-center text-2xl font-bold my-10">
        Find Your Home in Akure
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4 mx-10
      md:gap-10 md:mx-auto md:w-[650px]"
      >
        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Location</option>
            <option value="Alagbaka">Alagbaka</option>
            <option value="Ijapo Estate">Ijapo</option>
            <option value="Oba Ile">Oba Ile</option>
          </select>
        </div>

        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">House Type</option>
            <option value="A Room Self Con">A Room Self Con</option>
            <option value="1 bedroom">1 bedroom</option>
            <option value="2 bedroom">2 bedroom</option>
            <option value="Apartment">Apartment</option>
            <option value="Bungalow">Bungalow</option>

            <option value="4 bedroom or more">4 bedroom or more</option>
          </select>
        </div>
        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-350000">100k - 350k</option>
            <option value="400000-650000">400k - 650k</option>
            <option value="700000-1000000">700k - 1m</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className=" text-xl border-2 w-[150px]
         bg-green-900 px-4 py-1 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
