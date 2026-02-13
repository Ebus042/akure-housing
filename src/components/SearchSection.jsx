import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const navigate = useNavigate();

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // const handleSearch = () => {
  //   // Prevent empty search
  //   if (!selectedLocation && !selectedType && !selectedPriceRange) {
  //     alert("Please select at least one filter.");
  //     return;
  //   }

  //   navigate("/home", {
  //     state: {
  //       location: selectedLocation,
  //       type: selectedType,
  //       price: selectedPriceRange,
  //     },
  //   });
  // };

  const handleSearch = () => {
    if (!selectedLocation && !selectedType && !selectedPriceRange) {
      alert("Please select at least one filter.");
      return;
    }

    const query = new URLSearchParams();

    if (selectedLocation) query.append("location", selectedLocation);
    if (selectedType) query.append("type", selectedType);
    if (selectedPriceRange) query.append("price", selectedPriceRange);

    navigate(`/home?${query.toString()}`);
  };

  return (
    <section>
      <h1 className="text-center text-2xl font-bold my-10">
        Find Your Home in Akure
      </h1>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4 mx-10
        md:gap-10 md:mx-auto md:w-[650px]"
      >
        {/* Location */}
        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Location</option>
            <option value="Alagbaka">Alagbaka</option>
            <option value="Ijapo Estate">Ijapo Estate</option>
            <option value="Oba Ile">Oba Ile</option>
            <option value="Futa South Gate">Futa</option>
            <option value="Oke-Aro">Oke-Aro</option>
            <option value="Oda-Road">Oda-Road</option>
          </select>
        </div>

        {/* House Type */}
        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">House Type</option>
            <option value="Self Contained">Self Contained</option>
            <option value="1 bedroom Apartment">1 bedroom</option>
            <option value="2 bedroom Apartment">2 bedrooms</option>
            <option value="3 bedroom Apartment">3 bedrooms</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <select
            className="w-[150px] p-2 border-2 text-lg"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-399000">100k - 399k</option>
            <option value="400000-699000">400k - 699k</option>
            <option value="700000-1000000">700k - 1m</option>
            <option value="1100000-2500000">1.1m - 2.5m</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="text-xl border-2 w-[150px]
          bg-green-900 px-4 py-1 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
