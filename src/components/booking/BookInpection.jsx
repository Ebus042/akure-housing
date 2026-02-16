import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingForm from "./BookingForm";

const BookInpection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const property = location.state?.house;

  return (
    <section>
      <header className="flex gap-8 my-3 mx-3">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-6 h-6 text-gray-700 cursor-pointer"
        />

        <h2 className="text-xl font-bold">Book Inspection</h2>
      </header>

      <BookingForm property={property} />
    </section>
  );
};

export default BookInpection;
