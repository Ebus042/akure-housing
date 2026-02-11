import { ArrowLeft, List, Lock } from "lucide-react";
import PropertySelected from "./PropertySelected";
import { useNavigate } from "react-router-dom";

const PropertyDetailsSection = () => {
  const navigate = useNavigate();
  return (
    <section>
      <header className="flex gap-8 my-3 mx-3">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-6 h-6 text-gray-700 cursor-pointer"
        />

        <div className="flex items-center gap-1">
          <Lock className="w-6 h-6 text-gray-700" />
          <p>Property Status</p>
        </div>
        <div className="flex items-center gap-1">
          <List className="w-6 h-6 text-gray-700" />
          <p>Listing</p>
        </div>
      </header>

      <PropertySelected />
    </section>
  );
};

export default PropertyDetailsSection;
